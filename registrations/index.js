const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const passwordMessage = document.querySelector('#password-message');
const cpasswordMessage = document.querySelector('#cpassword-message');

password.addEventListener('input', () => {
  if (password.value.length < 8) {
    password.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
  } else {
    passwordMessage.style.display = 'none';
    password.style.boxShadow = '0 0 0 1.85px hsla(226, 100%, 64%, 0.5)';
  }
});

cpassword.addEventListener('input', () => {
  if (cpassword.value.length < 8) {
    cpassword.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
  } else {
    cpasswordMessage.style.display = 'none';
    cpassword.style.boxShadow = '0 0 0 1.85px hsla(226, 100%, 64%, 0.5)';
  }
});
