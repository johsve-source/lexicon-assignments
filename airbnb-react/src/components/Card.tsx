import { useEffect, useState } from 'react';
import ICardsProps from '../interfaces';

export default function Card({ card }: ICardsProps) {
  const [, setCards] = useState({
    id: -1,
    review: 0,
    description: '',
    location: '',
    price: 0,
    image: '',
    banner: '',
  });

  const [isOnline, setIsOnline] = useState(false);
  const [isSoldOut, setIsSoldOut] = useState(false);

  useEffect(() => {
    setIsOnline(true);
    setIsSoldOut(false);

    setCards({
      id: card.id,
      review: card.review,
      description: card.description,
      location: card.location,
      price: card.price,
      image: card.image,
      banner: card.banner ?? '',
    });
  }, [
    card.id,
    card.description,
    card.location,
    card.price,
    card.review,
    card.image,
    card.banner,
  ]);

  return (
    <article className="card-container poppins-regular">
      <section className="card--image-container">
        {card.banner && (
          <div
            className={
              'card--image-banner' +
              (card.banner.toLowerCase().includes('online') && isOnline === true
                ? ' card--online'
                : '') +
              (card.banner.toLowerCase().includes('sold out') &&
              isSoldOut === true
                ? ' card--sold-out'
                : '')
            }
          >
            <p>{card.banner}</p>
          </div>
        )}
        <img
          className="card--image"
          src={card.image}
          alt="Image of Katie Zaferes"
        />
      </section>
      <section className="card--info-container">
        <h3 className="card--review-text">
          <img
            className="card--star"
            src="/star.png"
            alt="Image of a review star"
          />
          5.0{' '}
          <span className="card--review-location">
            ({card.review}) • {card.location}
          </span>
        </h3>
        <h2 className="card--desc">{card.description}</h2>
        <h4 className="card--price">
          <span className="card--price-bold">From ${card.price}</span> / person
        </h4>
      </section>
    </article>
  );
}
