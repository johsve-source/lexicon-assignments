import { useEffect, useState } from 'react';
import ICardsProps from '../interfaces';
('../interfaces');

export default function Card({ card }: ICardsProps) {
  const [review, setReview] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    setReview(card.review);
    setDescription(card.description);
    setLocation(card.location);
    setPrice(card.price);

    const setInitialValues = () => {
      setReview(0);
      setDescription('Not set');
      setLocation('Not set');
      setPrice(0);
    };
    if (!review && !description && !location && !price) {
      setInitialValues();
    }
  }, [
    card.description,
    card.location,
    card.price,
    card.review,
    description,
    location,
    price,
    review,
  ]);

  return (
    <article className="card-container poppins-regular">
      <section className="card--image-container">
        <div className="card--image-banner">
          <p>SOLD OUT</p>
        </div>
        <img
          className="card--image"
          src="/katie-zaferes.png"
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
