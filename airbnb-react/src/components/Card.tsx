export default function Card() {
  return (
    <section className="cards-container">
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
            5.0 <span className="card--review-location">(6) • USA</span>
          </h3>
          <h2 className="card--desc">Life lessons with Katie Zaferes</h2>
          <h4 className="card--price">
            <span className="card--price-bold">From $136</span> / person
          </h4>
        </section>
      </article>
    </section>
  );
}
