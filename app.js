const express = require('express');
const app = express();
const morgan = require('morgan');
const chatRouter = require('./chatRouter');

app.use(morgan('dev'));

app.use('/', chatRouter);

module.exports = app;
