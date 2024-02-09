const apiURL = 'https://api.punkapi.com/v2/beers/';

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
