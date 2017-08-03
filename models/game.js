const dictionary = require('./dictionary');

function game() {
  this.phrase = dictionary.getPhrase();
  this.guessesLeft = 8;
  this.lettersRight = [];
  this.lettersWrong = [];
  this.finished = false;
}

function maskedPhrase (phrase, lettersRight) {
  mask = '';
  for (let i = 0; i < phrase.length; i++ ) {
    let letter = phrase[i];
    if (lettersRight.indexOf(letter) != -1 || letter === ' ') {
      mask += letter;
    } else {
      mask += '_';
    }
  };
  return mask;
}

module.exports = game;
module.exports.maskedPhrase = maskedPhrase;
