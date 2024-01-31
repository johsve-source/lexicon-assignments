const password = document.querySelector('#password').value;
const cpassword = document.querySelector('#cpassword').value;

password.addEventListener('input', () => {
  if (password.length < 8) {
    password.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
  } else {
    password.style.boxShadow = '0 0 0 1.85px hsla(226, 100%, 64%, 0.5)';
  }
});

cpassword.addEventListener('input', () => {
  if (cpassword.length < 8) {
    cpassword.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
  } else {
    cpassword.style.boxShadow = '0 0 0 1.85px hsla(226, 100%, 64%, 0.5)';
  }
});
