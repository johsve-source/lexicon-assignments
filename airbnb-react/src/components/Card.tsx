export default function Card() {
  return (
    <div>
      <img
        className="card--image"
        src="/katie-zaferes.png"
        alt="Image of Katie Zaferes"
      ></img>
      <img
        className="card--star"
        src="/star.png"
        alt="Image of a review star"
      ></img>
      <p className="card--desc">Life lessons with Katie Zaferes</p>
      <p className="card--price">
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
