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
adress.innerText = "Testing";

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

const logo = document.querySelector('header img');
logo.classList.remove('.logo');

const newNavItem = document.createElement('a');
newNavItem.href = '#';
newNavItem.textContent = 'New Item';

menu.appendChild(newNavItem);

const newItem = document.createElement('article');
newItem.className = 'art-4';
newItem.innerHTML = `
    <figure><img src="img/hoodie-fire.png" alt="hoodie"></figure>
    <h2>New Hoodie</h2>
    <h3>Color</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. New description.</p>
    <button>buy</button>
`;

const main = document.querySelector('main');
main.appendChild(newItem);

const logoClick = document.querySelector('header img');
logoClick.addEventListener('click', () => {
    console.log('found you!');
});

const articleClick = document.querySelectorAll('main article');
articleClick.forEach(article => {
    article.addEventListener('click', () => {
        console.log("Hi, I'm article Fire/Ash/Water");
    });
})

