var express = require('express');
var router = express.Router();
/* GET Living page. */
router.get('/living', function (req, res, next) {
    res.render('living', {
        title: 'Living'
    });
});

module.exports = router;