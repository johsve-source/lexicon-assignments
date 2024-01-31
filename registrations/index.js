const password = document.querySelector('#password');

const isPasswordComplex = (password) => {
  let complexity = 0;

  if (password.value.length >= 8) {
    complexity++;
  }
  if (/[A-Z]/.test(password.value)) {
    complexity++;
  }
  if (/[a-z]/.test(password.value)) {
    complexity++;
  }
  if (/[0-9]/.test(password.value)) {
    complexity++;
  }
  if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password.value)) {
    complexity++;
  }

  if (complexity >= 4) {
    console.log('Very Strong: Your password is secure!');
    password.style.boxShadow = '0 0 0 1.85px hsla(226, 100%, 64%, 0.5)';
  } else if (complexity === 3) {
    console.log('Strong: Good job, but a bit more complexity is recommended.');
  } else if (complexity === 2) {
    console.log('Moderate: Consider adding more complexity.');
  } else if (complexity === 1) {
    console.log('Weak: Password needs improvement.');
  } else {
    console.log('Password does not meet complexity requirements.');
  }
};

password.addEventListener('input', (e) => {
  const result = isPasswordComplex(e.target);
  console.log(result);
});
