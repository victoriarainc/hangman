//PACKAGES
const express = require('express');
const routes = express.Router();

const game = require('../models/game');

//ROUTE
routes.post('/', function(req, res) {
  
  //if there is no session redirect / to start a new game
  if (!req.session.active) {
    res.redirect('/');
    return
  }

  //state is the active session from the moment a user
  //starts a new game to the time it is closed
  let state = req.session.active;
  //we are requiring the posted data (what was submitted)
  let userGuess = req.body.userGuess;

  //if a letter has been submitted
  if (state.phrase.indexOf(userGuess) != -1) {
    //and it matches, push it to the lettersRight array
    if (state.lettersRight.indexOf(userGuess) === -1) {
      state.lettersRight.push(userGuess)
    } //and it does not match, push it to the lettersWrong array
    //and subtract a guess
  } else {
    state.lettersWrong.push(userGuess);
    state.guessesLeft -= 1;
  }
  res.redirect('/');
});

//EXPORT
module.exports = routes;
