import { fetchCharacters, fetchHomeworld } from './character/fetchCharacter';

let page = 1;
const characterContainer = document.getElementById('character-container');

async function loadCharacters() {
  const characters = await fetchCharacters(page);
  for (const character of characters) {
    const homeworld = await fetchHomeworld(character.homeworld);
    const characterElement = document.createElement('div');
    characterElement.textContent = `${character.name} - ${homeworld.name}`;
    characterContainer.appendChild(characterElement);
  }
  page += 1;
}

document.querySelector('load-more').addEventListener('click', loadCharacters);

loadCharacters();
