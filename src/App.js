import React from 'react';
import './App.css';
import { Sidebar } from './sidebar';
import { Switch, Route } from 'react-router-dom';
import { Home } from './home'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
