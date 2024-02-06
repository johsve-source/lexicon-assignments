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

getData('https://majazocom.github.io/Data/pokemons.json').then((data) => {
  console.log(data);
});
