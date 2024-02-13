const modal = document.querySelector('#autoplay-modal');
const closeButton = document.querySelector('#close-modal');

const isFirstVisit = !localStorage.getItem('visitedBefore');

if (isFirstVisit) {
  modal.style.display = 'block';
  localStorage.setItem('visitedBefore', true);
}

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
