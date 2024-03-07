import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link className="nav--links nav--link poppins-regular" to={'/'}>
        Hem
      </Link>
      <Link className="nav--links nav--link poppins-regular" to="/channels">
        Kanaler
      </Link>
    </nav>
  );
}
