let selectedWord;
let guessedLetters = [];
let remainingGuesses = 6;
const wordDisplay = document.querySelector('.word');
const messageDisplay = document.querySelector('.message');
const lettersContainer = document.querySelector('.letters');
const playAgainButton = document.getElementById('play-again');
const resetButton = document.getElementById('reset');
const hangmanSVG = document.getElementById('hangman-svg');

playAgainButton.style.display = 'none';
resetButton.style.display = 'none';

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
  updateWordDisplay();
}

function updateWordDisplay() {
  wordDisplay.textContent = selectedWord
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');
}

function handleUserInput(letter) {
  guessedLetters.push(letter);
  updateWordDisplay();
  checkLetter(letter);
}

function checkLetter(letter) {
  if (!selectedWord.includes(letter)) {
    messageDisplay.textContent = 'Incorrect!';
    remainingGuesses--;
    updateHangmanImage(); // Update hangman image separately
  } else {
    messageDisplay.textContent = 'Correct!';
  }

  if (remainingGuesses === 0) {
    messageDisplay.textContent =
      'Game over! You lost. The word was: ' + selectedWord;
    showPlayButtons();
  } else if (
    !selectedWord.split('').some((char) => !guessedLetters.includes(char))
  ) {
    // Check if all letters in the word have been guessed
    messageDisplay.textContent = 'Congratulations! You won!';
    showPlayButtons();
  }
}

function updateHangmanImage() {
  const hangmanContainer = document.querySelector('.hangman-container');
  hangmanContainer.classList.add(`guesses-${remainingGuesses}`);
}

function resetGame() {
  guessedLetters = [];
  remainingGuesses = 6;
  selectWord();
  updateWordDisplay();
  updateHangmanImage();
  messageDisplay.textContent = '';
  playAgainButton.style.display = 'none';
  resetButton.style.display = 'none';
}

function playAgain() {
  resetGame();
  playAgainButton.style.display = 'none';
  resetButton.style.display = 'block';
}

function showPlayButtons() {
  playAgainButton.style.display = 'block';
  resetButton.style.display = 'block';
}

// Event listeners for buttons
playAgainButton.addEventListener('click', playAgain);
resetButton.addEventListener('click', resetGame);

document.addEventListener('keydown', (event) => {
  const letter = event.key.toLowerCase();
  if (letter >= 'a' && letter <= 'z') {
    handleUserInput(letter);
  }
});

selectWord();
updateWordDisplay();
