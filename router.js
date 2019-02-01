const express = require('express');
const app = express();
const port = 3050;

//node router.js or nodemon router.js to run app
//default routing page is index.html

app.use(express.static(__dirname + '/public'));

//Default Page
app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname + "/cover/"
    });
});
//Default Reroute to main page
app.get('/index.html', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname + "/cover/"
    });
});
//Input page routing
app.get('/input', function (req, res) {
    res.sendFile('input.html', {
        root: __dirname + "/cover/"
    });
});
//Input page re-routing
app.get('/input.html', function (req, res) {
    res.sendFile('input.html', {
        root: __dirname + "/cover/"
    });
});
//Results Page Routing
app.get('/results', function (req, res) {
    res.sendFile('results.html', {
        root: __dirname + "/cover/"
    });
});
//Results re-routing
app.get('/results.html', function (req, res) {
    res.sendFile('results.html', {
        root: __dirname + "/cover/"
    });
});
//Calculator-example routing
app.get('/calculator-example', function (req, res) {
    res.sendFile('calculator-example.html', {
        root: __dirname + "/cover/"
    });
});
//calculator-example page re-routing
app.get('/calculator-example.html', function (req, res) {
    res.sendFile('calculator-example.html', {
        root: __dirname + "/cover/"
    });
});


//Displays the 
app.listen(port, () => console.log(`Wealth budgeting app is listening on port ${port}!`));