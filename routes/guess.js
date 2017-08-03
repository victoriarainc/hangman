const express = require('express');
const routes = express.Router();

const game = require('../models/game');

routes.post('/', function(req, res) {
  let state = new game();
  console.log(state);
  console.log(state.maskedPhrase());
  res.send('Blah');
});

module.exports = routes;
