// Code here!

const art1 = document.querySelector('article.art-1');
const h3 = art1.querySelector('h3');

h3.innerText = "Potato";

const menu = document.querySelector('nav');
const firstChild = menu.querySelector(':nth-child(1)');
firstChild.innerText = 'Start';

const secondChild = menu.querySelector(':nth-child(3)');
secondChild.innerText = 'Mail Us';

const art2 = document.querySelector('article.art-2 p');
art2.innerText = "Lorem Ipsum changed";

const art3 = document.querySelector('.art-3 button');
art3.innerText = "Changed";

const artBg = document.querySelector('article.art-1 figure');
artBg.style.backgroundColor = 'red';

const adress = document.querySelector('footer article:nth-child(2) p');
adress.innerText = "Test";

const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(paragraphs => {
    paragraphs.style.color = 'blue';
});

const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.innerText = 'add to cart';
});

const firstMenu = document.querySelector('nav :nth-child(1)');
firstMenu.classList.add('.active');