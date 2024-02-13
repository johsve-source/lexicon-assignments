(function () {
  let beerDetails;
  let currentBeerIndex = 1;

  const beerNameElement = document.querySelector('.beer-info #beer-name');
  const beerImgElement = document.querySelector('.beer-img img');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const openModalButton = document.getElementById('open-modal');
  const closeButton = document.querySelector('.close');
  nextButton.addEventListener('click', () => fetchBeer('next'));
  previousButton.addEventListener('click', () => fetchBeer('previous'));
  openModalButton.addEventListener('click', () => openModalDetails);
  closeButton.addEventListener('click', () => closeModal);

  window.addEventListener('click', (event) => {
    const modal = document.querySelector('#beer-modal');
    if (event.target === modal) {
      closeModal();
    }
  });

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
          foodPairing: beer.food_pairing,
          brewers: beer.brewers,
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
          beerImgElement.onload = () => {
            beerImgElement.alt = beerDetails.name;
          };
          beerImgElement.src = beerDetails.imageUrl;
        } else {
          console.warn('Image URL is not available for this beer.');
          beerImgElement.alt = ''; // Clear alt text if image is not available
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

  function formatIngredients(ingredients) {
    return ingredients
      .map(
        (ingredient) =>
          `${ingredient.name} - ${ingredient.amount.value} ${ingredient.amount.unit}`
      )
      .join(', ');
  }

  function fetchBeerDetails() {
    const modalBeerDetails = {
      name: beerDetails.name,
      description: beerDetails.description,
      abv: beerDetails.abv,
      volume: `${beerDetails.volume.value} ${beerDetails.volume.unit}`,
      malt: formatIngredients(beerDetails.ingredients.malt),
      hops: formatIngredients(beerDetails.ingredients.hops),
      foodPairing: beerDetails.foodPairing.join(', '),
      brewers: beerDetails.brewers
        ? beerDetails.brewers.join(', ')
        : 'Not specified',
    };

    openModal(modalBeerDetails);
  }

  function openModal(beer) {
    const modal = document.querySelector('#beer-modal');
    const modalBeerName = document.querySelector('#modal-beer-name');
    const modalBeerDescription = document.querySelector(
      '#modal-beer-description'
    );
    const modalBeerABV = document.querySelector('#modal-beer-abv');
    const modalBeerVolume = document.querySelector('#modal-beer-volume');
    const modalBeerMalt = document.querySelector('#modal-beer-malt');
    const modalBeerHops = document.querySelector('#modal-beer-hops');
    const modalBeerFoodPair = document.querySelector('#modal-beer-foodpair');
    const modalBeerBrewers = document.querySelector('#modal-beer-brewers');
    const modalBeerImage = document.querySelector('#modal-beer-image');

    modalBeerName.textContent = beer.name;
    modalBeerDescription.textContent = beer.description;
    modalBeerABV.textContent = `ABV: ${beer.abv}`;
    modalBeerVolume.textContent = `Volume: ${beer.volume}`;
    modalBeerMalt.textContent = `Malt: ${beer.malt}`;
    modalBeerHops.textContent = `Hops: ${beer.hops}`;
    modalBeerFoodPair.textContent = `Food Pairing: ${beer.foodPairing}`;
    modalBeerBrewers.textContent = `Brewers: ${beer.brewers}`;
    modalBeerImage.style.src = beer.imageUrl;

    modal.style.display = 'block';
  }

  function initializeBeerDetails() {
    fetchBeer();
  }

  function openModalDetails() {
    fetchBeerDetails();
  }

  function closeModal() {
    const modal = document.querySelector('#beer-modal');
    modal.style.display = 'none';
  }

  initializeBeerDetails();
})();
