let currentBeerIndex = 1;

function fetchBeer(direction) {
  const apiUrl = `https://api.punkapi.com/v2/beers/${currentBeerIndex}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((beerData) => {
      console.log(beerData);

      const beer = beerData[0];

      const beerName = beer.name;
      const imageUrl = beer.image_url;

      const beerNameElement = document.querySelector('.beer-info #beer-name');
      const beerImgElement = document.querySelector('.beer-img img');

      beerNameElement.textContent = beerName;

      if (imageUrl) {
        beerImgElement.src = imageUrl;
        beerImgElement.alt = beerName;
      } else {
        console.warn('Image URL is not available for this beer.');
      }

      if (direction === 'next') {
        currentBeerIndex += 1;
      } else if (direction === 'previous') {
        currentBeerIndex -= 1;
        if (currentBeerIndex < 1) {
          currentBeerIndex = 1;
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

fetchBeer();

const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');

nextButton.addEventListener('click', () => fetchBeer('next'));
previousButton.addEventListener('click', () => fetchBeer('previous'));
