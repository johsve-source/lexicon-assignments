export default function Card() {
  return (
    <div className="card-container">
      <section className="card--image-container">
        <img
          className="card--image"
          src="/katie-zaferes.png"
          alt="Image of Katie Zaferes"
        ></img>
      </section>
      <section className="card--info-container">
        <img
          className="card--star"
          src="/star.png"
          alt="Image of a review star"
        ></img>
        <p className="card--review-text">
          5.0 <span className="card--review-location">(6) - USA</span>
        </p>
        <p className="card--desc">Life lessons with Katie Zaferes</p>
        <p className="card--price">
          <span className=".card--price-bold">From $136</span> / person
        </p>
      </section>
    </div>
  );
}
