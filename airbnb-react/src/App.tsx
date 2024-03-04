import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'the-new-css-reset';
import './scss/main.scss';
import AddActivity from './pages/AddActivity';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact Component={Home} />
        <Route path="/add-activity" Component={AddActivity} />
      </Switch>
      <Footer />
    </Router>
  );
}
