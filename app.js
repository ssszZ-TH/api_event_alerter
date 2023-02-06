const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//import file ใน folder route มาใช้
const indexRouter = require('./routes/index');
const studentsRouter = require('./routes/students');
const eventsRouter = require('./routes/events');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);//เปิดปากทาง สำหรับหน้า root ให้เเสดงหน้า homepage api
app.use('/students', studentsRouter);//เปิดปากทาง พร้อมรับทุกอย่างจาก /users/<???>
app.use('/events',eventsRouter);//เปิดปากทาง localhost /event/<???>

//  404 page not found
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