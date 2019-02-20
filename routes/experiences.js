var express = require('express');
var router = express.Router();
/* GET Experiences page. */
router.get('/', function (req, res, next) {
    res.render('experiences', {
        title: 'Experiences'
    });
});

module.exports = router;