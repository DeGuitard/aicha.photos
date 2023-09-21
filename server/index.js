var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();

app.use(express.static('../client/public'));
app.use(expressLayouts);

app.set('views', __dirname + '/../client/views');
app.set('view engine', 'ejs');

// Registering views
app.get('/', function (req, res) {res.render('index', {page: 'index', title: 'Poésie de l\'instant'});});
app.get('/livres', function (req, res) {res.render('livres', {page: 'livres', title: 'Livres'});});
app.get('/surfeuses-bout-du-monde', function (req, res) {res.render('surfeuses-bout-du-monde', {page: 'livres', title: 'Surfeuses du bout du monde'});});
app.get('/matin-des-arbres', function (req, res) {res.render('matin-des-arbres', {page: 'livres', title: 'Matin des Arbres'});});
app.get('/eaux-interieures', function (req, res) {res.render('eaux-interieures', {page: 'livres', title: 'Eaux Intérieures'});});
app.get('/mondes-arree', function (req, res) {res.render('mondes-arree', {page: 'livres', title: 'Mondes Arrée'});});
app.get('/abbaye', function (req, res) {res.render('abbaye', {page: 'abbaye', title: 'Abbaye Saint-Guénolé'});});
app.get('/ocean', function (req, res) {res.render('ocean', {page: 'ocean', title: 'Océan'});});
app.get('/foret', function (req, res) {res.render('foret', {page: 'foret', title: 'Forêt'});});
app.get('/chevaux', function (req, res) {res.render('chevaux', {page: 'chevaux', title: 'Chevaux'});});
app.get('/reportages', function (req, res) {res.render('reportages', {page: 'reportages', title: 'Reportages'});});
app.get('/contact', function (req, res) {res.render('contact', {page: 'contact', title: 'Contact'});});
app.get('/voyages', function (req, res) {res.render('voyages', {page: 'voyages', title: 'Voyages'});});


app.use(function (req, res, next) {res.render('404', {page: '404', title: '404'});});
app.listen(7800, function () {
  console.log('Listening on port 7800.');
});
