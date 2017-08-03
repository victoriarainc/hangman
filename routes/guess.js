const express = require('express');
const routes = express.Router();

const game = require('../models/game');

routes.post('/', function(req, res) {
  res.send('Blah');
});

module.exports = routes;
