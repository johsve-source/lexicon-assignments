interface IRoute {
  id: number;
  name: string;
  path: string;
}

export function Header(): JSX.Element {
  const routes: IRoute[] = [
    {
      id: 1,
      name: 'Random Beer',
      path: '/',
    },
    {
      id: 2,
      name: 'Search page',
      path: '/search',
    },
  ];

  return (
    <header className="header">
      <h1>Welcome to Punk API</h1>
      <nav className="navBar">
        {routes.map((route) => (
          <a className="link" href={route.path}>
            {route.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
