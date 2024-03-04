import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <a href="/">
        <img
          className="nav--logo"
          src="/airbnb-logo.png"
          alt="Airbnb Logo"
        ></img>
      </a>
      <Link className="nav--links nav--link poppins-regular" to={'/'}>
        Home
      </Link>
      <Link className="nav--links nav--link poppins-regular" to="/add-activity">
        Add Activity
      </Link>
    </nav>
  );
}
