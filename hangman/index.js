let selectedWord;
let guessedLetters = [];
let remainingGuesses = 6;
const wordDisplay = document.querySelector('.word');
const messageDisplay = document.querySelector('.message');
const lettersContainer = document.querySelector('.letters');
const playAgainButton = document.getElementById('play-again');
const resetButton = document.getElementById('reset');

const words = [
  'house',
  'cat',
  'mouse',
  'person',
  'tomato',
  'computer',
  'guitar',
  'umbrella',
  'elephant',
  'pineapple',
  'banana',
  'coffee',
  'television',
  'restaurant',
  'airplane',
  'penguin',
  'library',
  'watermelon',
  'sunflower',
  'butterfly',
];

function selectWord() {
  const index = Math.floor(Math.random() * words.length);
  selectedWord = words[index];
}

// Event listeners for user input
lettersContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const selectedLetter = event.target.textContent;
    handleUserInput(selectedLetter);
  }
});

selectWord();
updateWordDisplay();
