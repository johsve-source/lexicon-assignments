import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import Navbar from './components/Navbar';
import FetchChannels from './components/FetchChannels';

import './styles/App.css';
import './styles/loading/loading.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channels" element={<FetchChannels />} />
      </Routes>
    </Router>
  );
}
