import { IRoute } from '../interfaces';

interface IHeaderProps {
  links: IRoute[];
}

export function Header(props: IHeaderProps): JSX.Element {
  return (
    <header className="header">
      <h1>Welcome to Punk API</h1>
      <nav className="navBar">
        {props.links.map((link) => (
          <a className="link" href={link.path}>
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
