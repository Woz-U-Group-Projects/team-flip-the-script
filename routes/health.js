var express = require('express');
var router = express.Router();
/* GET Health page. */
router.get('/', function (req, res, next) {
    res.render('health', {
        title: 'Health'
    });
});

module.exports = router;