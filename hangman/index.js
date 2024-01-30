import wordArray from './words.js';
import { Hangman } from './hangman.js';

const hangman = new Hangman(wordArray);
hangman.play();

window.reset = () => {
  hangman.reset();
  hangman.play();
};

window.playAgain = () => {
  hangman.play();
};

window.hangman = hangman;
