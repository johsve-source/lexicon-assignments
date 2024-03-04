import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'the-new-css-reset';
import './scss/main.scss';
import AddActivity from './pages/AddActivity';

export default function App() {
  return (
    <Routes>
      <Router>
        <Navbar />
        <Route path="/" element={<Home />} />
        <Route path="/add-activity" element={<AddActivity />} />
        <Footer />
      </Router>
    </Routes>
  );
}
