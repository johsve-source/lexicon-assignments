const password = document.querySelector('#password');

password.addEventListener('input', () => {
  if (password.value.length >= 8) {
    password.style.boxShadow = '0 0 0 1.85px hsla(226, 100%, 64%, 0.5)';
  } else {
    password.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
  }
});
