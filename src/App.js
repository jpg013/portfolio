import React from 'react';
import './App.css';
import { Sidebar } from './sidebar';
import { Switch, Route } from 'react-router-dom';
import { Home } from './home';
import { Portfolio } from './portfolio';
import { ContactMe } from './contact-me';
import { SkillsAndOffer } from './skills-and-offer';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="site-main">
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact-me">
            <ContactMe />
          </Route>
          <Route path="/skills-and-offer">
            <SkillsAndOffer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
