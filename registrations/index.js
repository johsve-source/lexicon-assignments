const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

password.addEventListener('input', () => {
  if (password.value.length < 8) {
    password.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
  } else {
    password.style.boxShadow = '0 0 0 1.85px hsla(226, 100%, 64%, 0.5)';
  }
});

cpassword.addEventListener('input', () => {
  if (cpassword.value.length < 8) {
    cpassword.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
  } else {
    cpassword.style.boxShadow = '0 0 0 1.85px hsla(226, 100%, 64%, 0.5)';
  }
  if (cpassword.textContent !== password.textContent) {
    console.log('Wrong Password');
  }
});
