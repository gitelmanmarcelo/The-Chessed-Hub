const nodemailer = require('nodemailer');

const dotenv = require('dotenv');

dotenv.config();

async function sendEmail(destination_mail,message) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, 
    // logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    },
    tls:{
      rejectUnAuthorized:false
    }
  });

  let info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: destination_mail,
    subject: 'you have received a donation through The Chessed Hub', 
    text: 'Glad to inform you that someone has decided to help you. The amount will be available in your' + 
    ' account in up to 3 days.' 
    + (message.length > 0 ? '\n\nThe donator left you a message:\n\n' + message : '') +  
    '\n\nWe take the opportunity to wish you good luck and all the best!!!' +
    '\nHope to see you back soon as a donator :)\n\nThe Chessed Hub team'
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = { sendEmail };