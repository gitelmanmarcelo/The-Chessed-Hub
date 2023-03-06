const { 
    id2NameGiver,
    getGiverPassword, 
    insertGiver,
    } = require('../modules/giver.js');

const { sendEmail } = require('../modules/email.js')

const _sendEmail = (req, res) => {
    sendEmail(req.body.email,req.body.message)
    .then( data => {
        res.status(200).end('success');
    })
    .catch(console.error);
}

const _id2NameGiver = (req,res) => {
    id2NameGiver(req.params.id)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
}

const _insertGiver = (req,res) => {
    insertGiver(req.body)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
}

const _getGiverPassword = (req, res) => {
    getGiverPassword(req.body.username)
    .then(data => {
         res.json(data);
        })
    .catch( err => {
        console.log(err);
    })
};

module.exports = {
    _sendEmail,
    _id2NameGiver,
    _insertGiver,
    _getGiverPassword,
};

