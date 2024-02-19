interface Navlinks {
  id: number;
  name: string;
  route: string;
}

export function Navbar() {
  const links: Navlinks[] = [
    {
      id: 1,
      name: 'Hot',
      route: '#hot',
    },
    {
      id: 2,
      name: 'Juicy',
      route: '#juicy',
    },
    {
      id: 3,
      name: 'Cosy',
      route: '#cosy',
    },
  ];
  return (
    <nav className="navBar">
      {links.map((link) => {
        return <a href={link.route}>{link.name}</a>;
      })}
    </nav>
  );
}
