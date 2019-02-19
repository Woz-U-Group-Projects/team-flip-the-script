var express = require('express');
var router = express.Router();
/* GET Transportation page. */
router.get('/transportation', function (req, res, next) {
    res.render('transportation', {
        title: 'Transportation'
    });
});

module.exports = router;