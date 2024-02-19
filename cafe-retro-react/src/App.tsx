import './styles/global.css';
import { Navbar } from './components/Navbar.tsx';
import { Body } from './components/Body.tsx';
import { Footer } from './components/Footer.tsx';

export function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}
