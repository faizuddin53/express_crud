var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require("./config");
var postRouter = require('./routes/Post');

var app = express();
const mongoose = require("mongoose");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/post', postRouter);
// app.use('/users', usersRouter);

// connect db 
const dbUrl = config.dbUrl;

mongoose .connect(dbUrl, { useNewUrlParser: true }) .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));

const Port = 4000;
app.listen(Port, function () {
  console.log("Runnning on " + Port);
});
module.exports = app;
