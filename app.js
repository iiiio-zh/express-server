var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

var app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var indexRouter = require('./routes/index');
app.use('/', indexRouter);
// app.use('/users', usersRouter);
var userRoutes = require('./routes/users'); //importing route
userRoutes(app); //register the route
var userProfileRoutes = require('./routes/user_profile');
userProfileRoutes(app);
var educationRoutes = require('./routes/education');
educationRoutes(app);
var projectRoutes = require('./routes/projects');
projectRoutes(app);
var resumeRoutes = require('./routes/resume');
resumeRoutes(app);
var skillRoutes = require('./routes/skill');
skillRoutes(app);
var socialMediaRoutes = require('./routes/social_media');
socialMediaRoutes(app);
var workRoutes = require('./routes/work');
workRoutes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
