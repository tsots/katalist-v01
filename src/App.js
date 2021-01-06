import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/pages/Home'
import About from './components/pages/About'
import Design from './components/pages/Design'
import Contact from './components/pages/Contact'
import Navbar from './components/layout/Navbar';
import { Container } from './components/styles/Index';

import {person} from './components/data/homeData'

// const people = homeData[0].people;

function App() {

  console.log(person)
  return (
    <Router>
      <Navbar />
      <Container>
      <Switch>
        <Route exact path="/">
          <Home {...person} />
          {/* <Home {...person[1]} /> */}
        </Route>
        <Route path="/about" component={About} />
        <Route path="/design" component={Design} />
        <Route path="/contact" component={Contact} />
      </Switch>
      </Container>
    </Router>
  );
}

export default App;
