import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Route} from 'react-router-dom';
import { BrowserRouter as Switch} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
