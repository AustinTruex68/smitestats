var express = require('express');


var app = express();
var port = process.env.PORT || 3000;



//app.use is ran by express before anything else this one sets up a static directory ie: look in these directories before serving the routes
app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
        title: 'SMITESTATS | Home'
    });
});

app.get('/login', function(req, res) {
    res.render('login', {
        title: 'SMITESTATS | Login'
    });
});

app.get('/register', function(req, res){
    res.render('register', {
        title: 'SMITESTATS | Register'
    })
});

app.get('/donate', function(req, res){
    res.render('donate', {
        title: 'SMITESTATS | Donate'
    })
});

app.get('/about', function(req, res) {
    res.render('about', {
        title: 'SMITESTATS | About'
    })
});

app.get('/godCompare', function(req, res) {
    res.render('godCompare', {
        title: 'SMITESTATS | God Compare'
    })
});

app.get('/playerCompare', function(req, res) {
    res.render('playerCompare', {
        title: 'SMITESTATS | Player Compare'
    })
});

app.get('/tierLists', function(req, res) {
    res.render('tierLists', {
        title: 'SMITESTATS | Tier Lists'
    })
});

app.listen(port, function(err) {
    console.log('running on server port: ' + port);
});
