const express = require('express');
const { 
    _getHelpedById,
    _insertHelped,
    _getHelpedPassword,
    } = require("../controllers/helped.js");

const router = express.Router()

router.post('/register',_insertHelped);

router.post('/login',  _getHelpedPassword);

// router.get('/:id', _getHelpedById );

module.exports = router;
