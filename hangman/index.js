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

const renderInitialDisplay = () => {
  const display = document.querySelector('.word');
  display.textContent = '';
  for (let i = 0; i < correctWord.length; i++) {
    display.textContent += '_ ';
  }
};
