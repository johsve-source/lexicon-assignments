// Specify the API endpoint
const apiUrl = 'https://api.punkapi.com/v2/beers/random';

// Use the fetch API to make the request
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then((beerData) => {
    // Assuming the response is an array of beers
    const randomBeer = beerData[0];

    // Extract the beer name and image URL
    const beerName = randomBeer.name;
    const imageUrl = randomBeer.image_url;

    // Display the beer name and image URL in the console
    console.log('Beer Name:', beerName);
    console.log('Image URL:', imageUrl);

    // If you want to update HTML elements with this information, you can do something like this:
    const beerNameElement = document.querySelector('.beer-info');
    const beerImgElement = document.querySelector('.beer-img img');

    beerNameElement.textContent = beerName;

    if (imageUrl) {
      // Only update the src attribute if imageUrl is available
      beerImgElement.src = imageUrl;
      beerImgElement.alt = beerName; // Set alt attribute for accessibility
    } else {
      console.warn('Image URL is not available for this beer.');
    }
  })
  .catch((error) => {
    console.error(error);
  });
