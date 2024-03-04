import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AddActivity from './pages/AddActivity';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'the-new-css-reset';
import './scss/main.scss';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-activity" element={<AddActivity />} />
      </Routes>
      <Footer />
    </Router>
  );
}
