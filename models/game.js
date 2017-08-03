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

function guessLetter ( active, letter) {
  if (active.phrase.indexOf(letter) != -1) {
    if (active.lettersRight.indexOf(letter) != -1) {
        active.lettersRight.append(letter)
    }
  }
}

module.exports = game;
module.exports.maskedPhrase = maskedPhrase;
module.exports.guessLetter = guessLetter;
