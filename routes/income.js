const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// const Item = require('../models/item');


/* GET Income page. */


router.get('/', function (req, res, next) {
    res.render('income', {
        title: 'Income'
    });
});



module.exports = router;