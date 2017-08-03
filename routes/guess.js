const express = require('express');
const routes = express.Router();

const game = require('../models/game');

routes.post('/', function(req, res) {

  console.log(req.headers);
  console.log(req.body);

  res.send(JSON.stringify({'data': 'Blah'}));
});

module.exports = routes;
