const { join } = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const chatRouter = require('./chatRouter');

app.use(morgan('dev'));
app.use(express.static(join(__dirname, 'tempClient')));
app.set('view engine', 'html');

app.use('/', chatRouter);

module.exports = app;
