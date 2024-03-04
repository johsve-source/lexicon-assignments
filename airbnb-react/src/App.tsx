import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

import 'the-new-css-reset';
import './scss/main.scss';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
