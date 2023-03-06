const express = require('express');
const { 
    _getGiverPassword,
    _insertGiver,
    _id2NameGiver,
    _sendEmail} = require("../controllers/giver.js");

const router = express.Router()

router.get('/id2Name/:id', _id2NameGiver );

router.post('/register',_insertGiver);

router.post('/email',_sendEmail);

router.post('/login',_getGiverPassword);

module.exports = router;
