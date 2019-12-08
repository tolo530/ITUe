import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import '..src/App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';


function App() {
  return (
    <Router>
      <div className="App">

      
        <Header />
        <Route exact path ='/' component = {Home} />
        <Route exact path ='/login' component = {Login} />
        <Route exact path ='/registration' component = {Registration} />

      
      </div>
      </Router>
  );
}

export default App;
