// Arrow functions instead

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const col = document.querySelector('.color');

btn.addEventListener('click', () => {
  let hexCol = '#';
  for (let i = 0; i < 6; i++) {
    hexCol += hex[getRandomHex()];
  }

  col.textContent = hexCol;
  document.body.style.backgroundColor = hexCol;
});

const getRandomHex = () => {
  return Math.floor(Math.random() * hex.length);
};
