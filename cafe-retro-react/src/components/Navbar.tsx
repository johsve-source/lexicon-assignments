import '../styles/Navbar.css';

interface Navlinks {
  id: number;
  name: string;
  route: string;
  class: string;
}

export function Navbar() {
  const links: Navlinks[] = [
    {
      id: 1,
      name: 'Hot',
      route: '#hot',
      class: 'hot',
    },
    {
      id: 2,
      name: 'Juicy',
      route: '#juicy',
      class: 'juicy',
    },
    {
      id: 3,
      name: 'Cosy',
      route: '#cosy',
      class: 'cosy',
    },
  ];
  return (
    <nav className="navBar">
      {links.map((link) => {
        return (
          <a className={link.class} href={link.route}>
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}
