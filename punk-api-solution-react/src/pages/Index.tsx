import React from 'react';

export function Index(): JSX.Element {
  const generateRandomBeer: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers/random');
    const beer = await response.json();

    console.log(beer);
  };

  return (
    <>
      <section>
        <h2>Your random beer of the day!</h2>
        <article className="random-beer">
          <div className="loader"></div>
        </article>
      </section>
      <footer>
        <button onClick={generateRandomBeer}>Generate new random beer</button>
      </footer>
    </>
  );
}
