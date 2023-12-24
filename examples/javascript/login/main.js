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

const btn = document.querySelector('.btn');
btn.style.background = 'red';
