let beerDetails;
let currentBeerIndex = 1;

const beerNameElement = document.querySelector('.beer-info #beer-name');
const beerImgElement = document.querySelector('.beer-img img');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
nextButton.addEventListener('click', () => fetchBeer('next'));
previousButton.addEventListener('click', () => fetchBeer('previous'));

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

      beerDetails = {
        name: beer.name,
        imageUrl: beer.image_url,
        description: beer.description,
        abv: beer.abv,
        volume: {
          value: beer.volume.value,
          unit: beer.volume.unit,
        },
        ingredients: {
          malt: [],
          hops: [],
        },
      };

      for (const malt of beer.ingredients.malt) {
        const maltDetails = {
          name: malt.name,
          amount: {
            value: malt.amount.value,
            unit: malt.amount.unit,
          },
        };
        beerDetails.ingredients.malt.push(maltDetails);
      }

      for (const hop of beer.ingredients.hops) {
        const hopDetails = {
          name: hop.name,
          amount: {
            value: hop.amount.value,
            unit: hop.amount.unit,
          },
        };
        beerDetails.ingredients.hops.push(hopDetails);
      }

      beerNameElement.textContent = beerDetails.name;

      if (beerDetails.imageUrl) {
        beerImgElement.src = beerDetails.imageUrl;
        beerImgElement.alt = beerDetails.name;
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

function fetchBeerDetails() {
  const mockBeerDetails = {
    name: beerDetails.name,
    description: beerDetails.description,
  };

  openModal(mockBeerDetails);
}

function openModal(beer) {
  const modal = document.querySelector('#beer-modal');
  const modalBeerName = document.getElementById('modal-beer-name');
  const modalBeerDescription = document.getElementById(
    'modal-beer-description'
  );

  modalBeerName.textContent = beer.name;
  modalBeerDescription.textContent = beer.description;

  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.querySelector('#beer-modal');
  modal.style.display = 'none';
}

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
  const modal = document.querySelector('#beer-modal');
  if (event.target === modal) {
    closeModal();
  }
});

function openModalDetails() {
  fetchBeerDetails();
}
