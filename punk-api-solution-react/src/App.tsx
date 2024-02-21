import { Index } from './pages/Index';
import { Header } from './components/Header';
import { IRoute } from './interfaces.ts';

export function App(): JSX.Element {
  const links: IRoute[] = [
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
    <>
      <Header links={links} />
      <Index />
    </>
  );
}
