const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const helped_router = require('./routes/helped.js')
const giver_router = require('./routes/giver.js')
const stories_router = require('./routes/stories.js')

dotenv.config();

const app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',express.static(__dirname+'/views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
  });

app.get('/index.html', (req, res) => {
    res.render('index');
  });

  app.get('/login.html', (req, res) => {
    res.render('login');
  });

  app.get('/register.html', (req, res) => {
    res.render('register');
  });

  app.get('/s/story.html', (req, res) => {
    res.render('./s/story');
  });

  app.get('/s/success.html', (req, res) => {
    res.render('./s/success');
  });

  app.get('/g/login.html', (req, res) => {
    res.render('./g/login');
  });

  app.get('/g/register.html', (req, res) => {
    res.render('./g/register');
  });

  app.get('/g/main.html', (req, res) => {
    res.render('./g/main');
  });

  app.get('/g/checkout.html', (req, res) => {
    res.render('./g/checkout');
  });

  app.get('/g/thanks.html', (req, res) => {
    res.render('./g/thanks');
  });

  app.get('/g/transfer-thanks.html', (req, res) => {
    res.render('./g/transfer-thanks');
  });

  app.get('/contact.html', (req, res) => {
    res.render('./contact');
  });

  app.get('/aboutus.html', (req, res) => {
    res.render('./aboutus');
  });

app.listen(process.env.PORT, () => { console.log('run on port '+ process.env.PORT)});

app.use('/', helped_router);
app.use('/g', giver_router);
app.use('/s', stories_router);
