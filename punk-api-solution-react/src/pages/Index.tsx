import { MouseEventHandler, useState } from 'react';

export function Index(): JSX.Element {
  const [beer, setBeer] = useState<null | string>('undefined');

  const generateRandomBeer: MouseEventHandler<HTMLButtonElement> = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers/random');
    const beer = await response.json();

    /* console.log(beer); */
    setBeer(beer[0].name);
  };

  return (
    <>
      <section>
        <h2>Your random beer of the day!</h2>
        <article className="random-beer">
          <div className="loader"></div>
          <h1>{beer}</h1>
        </article>
      </section>
      <footer>
        <button onClick={generateRandomBeer}>Generate new random beer</button>
      </footer>
    </>
  );
}
