import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuView from './views/MenuView';
import ContactView from './views/ContactView';
import HomeView from './views/HomeView';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/menu" component={MenuView} />
        <Route path="/contact" component={ContactView} />
      </Switch>
    </Router>
  );
}

export default App;
