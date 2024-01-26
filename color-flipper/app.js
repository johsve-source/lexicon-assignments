// Arrow functions instead

const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const col = document.querySelector('.color');

btn.addEventListener('click', () => {
  // Get random number bettwen 0 and 3
  const randomNumber = 2;
  document.body.style.backgroundColor = colors[randomNumber];
  col.textContent = colors[randomNumber];
});
