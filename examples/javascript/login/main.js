/* 
// Single element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// Multiple element
console.log(document.querySelectorAll('.item')); // Recommended, newer.

// Older version of the one above
console.log(document.getElementsByClassName('item')) 

// Select all in .items using forEach
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));
*/

/* DOM Manipulation
const ul = document.querySelector('.items');

ul.lastElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.firstElementChild.innerHTML = '<h4>Hello</h4>'; */
/* 
const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<b>BOLD</b>';
}); */

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    // Clear the fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
