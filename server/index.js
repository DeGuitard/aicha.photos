var express         = require('express');
var expressLayouts  = require('express-ejs-layouts');
var app             = express();

app.use(express.static('../client/public'));
app.use(expressLayouts);

app.set('views', __dirname + '/../client/views');
app.set('view engine', 'ejs');

// Registering views
app.get('/',                        function(req, res) { res.render('index',                    { page: 'index',    title: 'Poésie de l\'instant'}); });
app.get('/livre',                   function(req, res) { res.render('livre',                    { page: 'livre',    title: 'Livre' }); });
app.get('/ocean',                   function(req, res) { res.render('ocean',                    { page: 'ocean',    title: 'Océan' }); });
app.get('/foret',                   function(req, res) { res.render('foret',                    { page: 'foret',    title: 'Forêt' }); });
app.get('/chevaux',                 function(req, res) { res.render('chevaux',                  { page: 'chevaux',  title: 'Chevaux' }); });
app.get('/contact',                 function(req, res) { res.render('contact',                  { page: 'contact',  title: 'Contact' }); });


app.use(function(req, res, next) { res.render('404', { page: '404',  title: '404' }); });
app.listen(7800, function () {
    console.log('Listening on port 7800.');
});