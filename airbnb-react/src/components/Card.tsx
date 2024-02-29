import { useEffect, useState } from 'react';
import ICardsProps from '../interfaces';

export default function Card({ card }: ICardsProps) {
  const [, setCards] = useState({
    review: 0,
    description: '',
    location: '',
    price: 0,
    image: '',
  });

  useEffect(() => {
    setCards({
      review: card.review,
      description: card.description,
      location: card.location,
      price: card.price,
      image: card.image,
    });

    const setInitialValues = () => {
      setCards({
        review: 0,
        description: '',
        location: '',
        price: 0,
        image: '',
      });
    };
    if (
      !card.review &&
      !card.description &&
      !card.location &&
      !card.price &&
      !card.image
    ) {
      setInitialValues();
    }
  }, [card.description, card.location, card.price, card.review, card.image]);

  return (
    <article className="card-container poppins-regular">
      <section className="card--image-container">
        <div className="card--image-banner">
          <p>SOLD OUT</p>
        </div>
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
