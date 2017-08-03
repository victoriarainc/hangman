const express = require('express');
const routes = express.Router();

const game = require('../models/game');

routes.post('/', function(req, res) {

  if (!req.session.active) {
    console.log('No active game!');
    res.redirect('/');
    return
  }
  let state = req.session.active;
  let userGuess = req.body.userGuess;

  if (state.phrase.indexOf(userGuess) != -1) {
    if (state.lettersRight.indexOf(userGuess) === -1) {
        state.lettersRight.push(userGuess)
    }
  } else {
    state.lettersWrong.push(userGuess);
    state.guessesLeft -= 1;
  }
  res.redirect('/');
});

module.exports = routes;
