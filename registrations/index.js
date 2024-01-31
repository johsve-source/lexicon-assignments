const name = document.querySelector('#name');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#cpassword');
const button = document.querySelector('#button');

const registrationData = {
  name: '',
  username: '',
  email: '',
  password: '',
};

let prevComplexity = -1;

const isPasswordComplex = (password) => {
  let complexity = -1;

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

  if (complexity >= prevComplexity) {
    prevComplexity = complexity;

    if (complexity === 4) {
      console.log('Very Strong: Your password is secure!');
      password.style.boxShadow = '0 0 0 1.85px hsla(118, 100%, 51%, 0.5)';
    } else if (complexity === 3) {
      console.log(
        'Strong: Good job, but a bit more complexity is recommended.'
      );
    } else if (complexity === 2) {
      console.log('Moderate: Consider adding more complexity.');
    } else if (complexity === 1) {
      console.log('Weak: Password needs improvement.');
    } else {
      console.log('Password does not meet complexity requirements.');
    }
  } else {
    console.log('Removing required characters. Please add them back.');
    password.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
    prevComplexity--;
    isPasswordComplex(password);
  }
};

const validatePassword = () => {
  if (password.value === confirmPassword.value) {
    confirmPassword.style.boxShadow = '0 0 0 1.85px hsla(118, 100%, 51%, 0.5)';
  } else {
    confirmPassword.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
  }
};

password.addEventListener('input', (e) => {
  isPasswordComplex(e.target);
  validatePassword();
});

confirmPassword.addEventListener('input', (e) => {
  validatePassword();
});

button.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    !name.value ||
    !username.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    return alert('Please fill in all fields.');
  }

  registrationData.name = name.value;
  registrationData.username = username.value;
  registrationData.email = email.value;
  registrationData.password = password.value;

  console.log(registrationData);
});
