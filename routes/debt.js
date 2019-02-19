var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/debt', function (req, res, next) {
    res.render('debt', {
        title: 'Debt'
    });
});

module.exports = router;
