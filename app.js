//Middleware
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var compression = require('compression');
var minifyHTML = require("express-minify-html");

//Import des pages
var index = require('./routes/index');
var bibliotheque = require("./routes/bibliotheque");
var ajouter = require('./routes/ajouter');
var livre = require("./routes/livre");
var connection = require("./routes/connection");
var statistiques = require("./routes/statistiques");
var collections = require("./routes/collections");
var emprunts = require("./routes/emprunts");
var modifier = require("./routes/modifier");
var supprimer = require("./routes/supprimer");
//temporaire
var livres = require("./routes/livres");
var membres = require("./routes/membres");

var app = express();

//compression
app.use(compression());

//minification du html
app.use(minifyHTML({
  override: true,
  exception_url: false,
  htmlMinifier: {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    minifyJS: true
  }
}));

//handlebars
var hbs = exphbs.create({});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('partials', path.join(__dirname, 'partials'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'hbs');

//favicon
app.use(favicon(path.join(__dirname, '/public', 'favicon.png')));
//logging
app.use(logger('combined', {
  skip: function (req, res) { return res.statusCode < 400; }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
//cookies
app.use(cookieParser());
//static content
app.use(express.static(__dirname + '/public'));

//import de pages
app.use('/', index);
app.use('/', bibliotheque);
app.use('/', ajouter);
app.use('/', livre);
app.use('/', connection);
app.use('/', statistiques);
app.use('/', collections);
app.use('/', livres);
app.use('/', emprunts);
app.use('/', membres);
app.use('/', modifier);
app.use('/', supprimer);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    error: err
  });
});

module.exports = app;