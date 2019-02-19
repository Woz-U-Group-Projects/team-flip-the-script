var express = require('express');
var router = express.Router();
/* GET Wealthbuilding page. */
router.get('/', function (req, res, next) {
    res.render('wealthbuilding', {
        title: 'Wealthbuilding'
    });
});

module.exports = router;