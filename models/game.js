//PACKAGES
const dictionary = require('./dictionary');

//HANGMAN
  //this is the 'shape' of the game and the pieces that
  //will be manipulated as it is played
function game() {
  this.phrase = dictionary.getPhrase();
  this.guessesLeft = 8;
  this.lettersRight = [];
  this.lettersWrong = [];
  this.finished = false;
  this.winner = false;
}

  //the display is a function that consists of the phrase pulled
  //and will show letters when they are correct
function maskedPhrase (phrase, lettersRight) {
  //at first the letters are empty spaces
  mask = '';
  for (let i = 0; i < phrase.length; i++ ) {
    //when a letter in the phrase matches one in the lettersRight array
    let letter = phrase[i];
    if (lettersRight.indexOf(letter) != -1 || letter === ' ') {
      //set that empty space to the letter guessed
      mask += letter;
      //if it does not match
    } else {
      //display an underscore
      mask += '_';
    }
  };
  return mask;
}

//EXPORTS
module.exports = game;
module.exports.maskedPhrase = maskedPhrase;
