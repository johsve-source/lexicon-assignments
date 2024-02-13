import { fetchCharacters, fetchHomeworld } from './fetchCharacter.js';

const characterListContainer = document.querySelector('.characterList');
const characterInfoContainer = document.querySelector(
  '.characterInfo-container'
);

async function loadCharacters() {
  for (let i = 1; i <= 9; i++) {
    try {
      const characters = await fetchCharacters(i);
      displayCharacters(characters);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
}

function displayCharacters(characters) {
  characters.forEach((character) => {
    let characterDiv = document.createElement('div');
    characterDiv.className = 'characterList__item';
    characterDiv.innerHTML = `
      <div class="characterList__item__image">
        <img src="./assets/images/${character.name}.jpg" alt="${character.name}" />
      </div>
      <div class="characterList__item__name">
        <p>${character.name}</p>
      </div>
    `;

    characterDiv.addEventListener('click', async () => {
      const homeworld = await fetchHomeworld(character.homeworld);
      displayCharacterInfo(character, homeworld);
    });

    characterListContainer.appendChild(characterDiv);
  });
}

function displayCharacterInfo(character, homeworld) {
  characterInfoContainer.innerHTML = `
    <p>Name: ${character.name}</p>
    <p>Height: ${character.height} cm</p>
    <p>Mass: ${character.mass} kg</p>
    <p>Hair color: ${character.hair_color}</p>
    <p>Skin color: ${character.skin_color}</p>
    <p>Eye color: ${character.eye_color}</p>
    <p>Birth year: ${character.birth_year}</p>
    <p>Gender: ${character.gender}</p>
    <p>Homeworld: ${homeworld}</p>
    <p>Films: ${character.films.length}</p>
    <p>Species: ${character.species.length}</p>
    <p>Vehicles: ${character.vehicles.length}</p>
    <p>Starships: ${character.starships.length}</p>
  `;
}

loadCharacters();
