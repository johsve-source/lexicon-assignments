import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <a href="/">
        <img
          className="nav--logo"
          src="/sveriges-radio-header-logo.png"
          alt="Sveriges Radio Logo"
        ></img>
      </a>
      <Link className="nav--links nav--link poppins-regular" to={'/'}>
        Hem
      </Link>
      <Link className="nav--links nav--link poppins-regular" to="/channels">
        Kanaler
      </Link>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
    </nav>
  );
}
