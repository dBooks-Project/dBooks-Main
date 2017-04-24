var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var compression = require('compression');
var mysql = require('mysql');
var minify = require('express-minify');

var index = require('./routes/index');
var dashboard = require("./routes/dashboard");
var livre = require("./routes/livre");
var connection = require("./routes/connection");
var statistiques = require("./routes/statistiques");

var app = express();

app.use(compression());

var hbs = exphbs.create({ /* config here */ });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '/public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.use('/', index);
app.use('/', dashboard);
app.use('/', livre);
app.use('/', connection);
app.use('/', statistiques);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { error: err });
});

module.exports = app;
