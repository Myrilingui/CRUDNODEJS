var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//rutas definidas CREACION DE RUTAS PROTEGIDAS
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var nosotrosRouter = require('./routes/nosotros');
var crearRouter = require('./routes/crear');
var actualizarRouter = require('./routes/actualizar');
var deleteRouter = require('./routes/delete');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//llamado de las rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/crear', crearRouter);
app.use('/actualizar', actualizarRouter);
app.use('/delete', deleteRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
