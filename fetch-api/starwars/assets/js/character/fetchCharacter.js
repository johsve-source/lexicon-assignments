export async function fetchCharacters(page) {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await response.json();
  return data.results;
}

export async function fetchHomeworld(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.name;
}
