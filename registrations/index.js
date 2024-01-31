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

  if (complexity > prevComplexity) {
    prevComplexity = complexity;
    handlePasswordComplexity(complexity);
  } else if (complexity < prevComplexity) {
    prevComplexity = complexity;
    handlePasswordComplexity(complexity);
  }
};

const handlePasswordComplexity = (complexity) => {
  if (complexity === 4) {
    password.style.boxShadow = '0 0 0 1.85px hsla(103, 100%, 64%, 0.5)';
    console.log('Very Strong: Your password is secure!');
  } else if (complexity === 3) {
    password.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
    console.log('Strong: Good job, but a bit more complexity is recommended.');
  } else if (complexity === 2) {
    password.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
    console.log('Moderate: Consider adding more complexity.');
  } else if (complexity === 1) {
    password.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
    console.log('Weak: Password needs improvement.');
  } else {
    password.style.boxShadow = 'none';
  }
};

const validatePassword = () => {
  if (password.value === confirmPassword.value) {
    confirmPassword.style.boxShadow = '0 0 0 1.85px hsla(103, 100%, 64%, 0.5)';
    return true;
  } else {
    confirmPassword.style.boxShadow = '0 0 0 1.85px hsla(0, 100%, 64%, 0.5)';
    return false;
  }
};

const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const emptySensitiveFields = () => {
  password.value = '';
  cpassword.value = '';
  email.value = '';
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

  if (!validatePassword()) {
    emptySensitiveFields();
    return alert('Your password does not match.');
  }
  if (!isEmailValid(email.value.trim())) {
    emptySensitiveFields();
    return alert('Please provide a correct email.');
  }

  registrationData.name = name.value;
  registrationData.username = username.value;
  registrationData.email = email.value;
  registrationData.password = password.value;

  console.log(registrationData);
});
