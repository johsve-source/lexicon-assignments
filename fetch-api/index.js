async function getData(url = '') {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

// const displayPokemons = async () => {
//   try {
//     const pokemonData = await getData(
//       'https://majazocom.github.io/Data/pokemons.json'
//     );
//     outPokelist(pokemonData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const outPokelist = (pokemonData) => {
//   const listPokemon = document.querySelector('#pokelist');

//   for (const pokemonName in pokemonData) {
//     if (pokemonData.hasOwnProperty(pokemonName)) {
//       const listItem = document.createElement('p');
//       const pokemon = pokemonData[pokemonName];

//       const pokemonNameString = pokemon.name || 'Unknown Name';

//       listItem.textContent = `${pokemonNameString}`;
//       listPokemon.appendChild(listItem);

//       console.log(`${pokemonName}: ${pokemonNameString}`);
//     }
//   }
// };

// displayPokemons();

/* ====================================== */

// const displayDogs = async () => {
//   try {
//     const dogsData = await getData(
//       'https://majazocom.github.io/Data/dogs.json'
//     );
//     outDogslist(dogsData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const outDogslist = (dogsData) => {
//   const listDogs = document.querySelector('#dogslist');

//   for (const dogsName in dogsData) {
//     if (dogsData.hasOwnProperty(dogsName)) {
//       const listItem = document.createElement('p');
//       const dogs = dogsData[dogsName];

//       const dogsNameString = dogs.name || 'Unknown Name';

//       listItem.textContent = `${dogsNameString}`;
//       listDogs.appendChild(listItem);

//       console.log(`${dogsName}: ${dogsNameString}`);
//     }
//   }
// };

// displayDogs();

/* ====================================== */

const displayBooks = async () => {
  try {
    const booksData = await getData(
      'https://majazocom.github.io/Data/books.json'
    );
    outBooksList(booksData);
  } catch {
    console.error(error);
  }
};
