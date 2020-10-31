// var createError = require('http-errors');
require('./database');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/**
 * import routers.
 */
var defaultRouter = require('./routes');
var userRouter = require('./routes/users');

/**
 * start express.
 */
var app = express();

/**
 * view engine setup.
 * * register jade viewes, than can be called by name.
 * * example:   res.render('default') ---> this will render
 * * a jade view with 'default' name.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/**
 * config.
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * load static files from "assets".
 * * "assets" can have "images, CSS, ...".
 * 
 * * we can call assets like this "server_url/asset_name",
 * * call "asset_name" directly bz we called "app.use"direct without
 * * url.
 */
app.use(express.static(path.join(__dirname, 'assets')));

/**
 * setup routers.
 */
app.use('/', defaultRouter);
app.use('/users', userRouter);

/**
 * error handler (catch errors).
 */
app.use(function (err, req, res) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

});

/**
 * expprt app.
 */
module.exports = app;