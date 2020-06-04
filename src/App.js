import React from 'react';
import './App.css';
import { Sidebar } from './sidebar';
import { Switch, Route } from 'react-router-dom';
import { Home } from './home'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="site-main">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
