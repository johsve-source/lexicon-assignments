export async function fetchCharacters(page) {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await response.json();
  return data.results;
}
