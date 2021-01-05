import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/pages/Home'
import About from './components/pages/About'
import Design from './components/pages/Design'
import Contact from './components/pages/Contact'
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/design" component={Design} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
