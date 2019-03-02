const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const inputRouter = require('./routes/input');
//setting up routes for the categories
const incomeRouter = require('./routes/income');
const livingRouter = require('./routes/living');
const transportationRouter = require('./routes/transportation');
const experiencesRouter = require('./routes/experiences');
const healthRouter = require('./routes/health');
const debtRouter = require('./routes/debt');
const wealthbuildingRouter = require('./routes/wealthbuilding');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/input', inputRouter);
//routes for the categories
app.use('/income', incomeRouter);
app.use('/living', livingRouter);
app.use('/transportation', transportationRouter);
app.use('/experiences', experiencesRouter);
app.use('/health', healthRouter);
app.use('/debt', debtRouter);
app.use('/wealthbuilding', wealthbuildingRouter);


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
