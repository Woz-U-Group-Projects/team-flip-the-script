var express = require('express');
var router = express.Router();
/* GET Income page. */
router.get('/', function (req, res, next) {
    res.render('income', {
        title: 'Income'
    });
});


router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Amazing US Cities',
        cities: [{
                name: 'San Fransisco',
                state: 'CA',
                population: 864816
            },
            {
                name: 'Denver',
                state: 'CO',
                population: 682545
            },
            {
                name: 'Seattle',
                state: 'WA',
                population: 704352
            },
            {
                name: 'Portland',
                state: 'OR',
                population: 639863
            },
            {
                name: 'New York City',
                state: 'NY',
                population: 8.538
            },
            {
                name: 'Charlotte',
                state: 'NC',
                population: 842051
            },
            {
                name: 'Pittsburgh',
                state: 'PA',
                population: 303625
            }
        ]
    });
});


module.exports = router;