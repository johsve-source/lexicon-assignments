import wordArray from './words';

let correctWord = '';
let guessedLetters = [];
let incorrectGuesses = 0;

const chooseRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
};

const initalizeGame = () => {
  correctWord = chooseRandomWord();
  guessedLetters = [];
  incorrectGuesses = 0;
};
