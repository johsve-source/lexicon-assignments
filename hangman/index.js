import wordArray from './words';

let correctWord = '';
let guessedLetters = [];
let incorrectGuesses = 0;

const chooseRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex];
};

const renderInitialDisplay = () => {
  const display = document.querySelector('.word');
  display.textContent = '';
  for (let i = 0; i < correctWord.length; i++) {
    display.textContent += '_ ';
  }
  initilizeGame();
  updateDisplay();
};

const initalizeGame = () => {
  correctWord = chooseRandomWord();
  guessedLetters = [];
  incorrectGuesses = 0;
};

const updateDisplay = () => {
  const wordDisplay = document.querySelector('.word');
  wordDisplay.textContent = '';
  for (let i = 0; i < correctWord.length; i++) {
    if (guessedLetters.includes(correctWord[i])) {
      wordDisplay.textContent += correctWord[i] + ' ';
    } else {
      wordDisplay.textContent += '_ ';
    }
  }
};

const updateIncorrectGuesses = () => {
  const incorrectGuessesDisplay = document.querySelector('.incorrect-guesses');
  incorrectGuessesDisplay.textContent = `Incorrect Guesses: ${incorrectGuesses}`;
};
