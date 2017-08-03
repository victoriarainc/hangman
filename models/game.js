const dictionary = require('./dictionary');

function game() {
  this.phrase = dictionary.getPhrase();
  this.guessesLeft = 8;
  this.lettersRight = [];
  this.lettersWrong = [];

  this.maskedPhrase = function() {
    mask = '';
    for (let i = 0; i < this.phrase.length; i++ ) {
      let letter = this.phrase[i];
      if (this.lettersRight.indexOf(letter) != -1 || letter === ' ') {
        mask += letter;
      } else {
        mask += '_';
      }
    };
    return mask;
  }
}

module.exports = game;
