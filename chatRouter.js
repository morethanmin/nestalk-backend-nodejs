const express = require('express');
const chatRouter = express.Router();

const { home } = require('./chatController');

chatRouter.get('/', home);

module.exports = chatRouter;
