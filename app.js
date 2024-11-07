var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var logger       = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var submitFormRouter = require('./routes/submitForm');

var webconfig = require('./config/webconfig');

var app = express();
var port= 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/submitForm', submitFormRouter);

app.get('/', (req, res) => {
  res.send("GET Request Called");
});

module.exports = app;
