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

app.listen(port, function(err) {
    console.log('running on server port: ' + port);
});
