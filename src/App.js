import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuView from './views/MenuView';
import ContactView from './views/ContactView';
import HomeView from './views/HomeView';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
      <Routes>
        <Route exact path="/" component={HomeView} />
        <Route path="/menu" component={MenuView} />
        <Route path="/contact" component={ContactView} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
