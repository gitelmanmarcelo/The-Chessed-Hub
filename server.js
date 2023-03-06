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

app.use('/',express.static(__dirname + '/public'));

app.listen(process.env.PORT, () => { console.log('run on port '+ process.env.PORT)});

app.use('/', helped_router);
app.use('/g', giver_router);
app.use('/s', stories_router);
