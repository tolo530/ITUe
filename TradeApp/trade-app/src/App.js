import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Components:
import Header from './components/headerComponent/header';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Categories from './components/Pages/Categories';

//Style
import "./assets/css/app.css";


function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Route exact path ='/' component = {Home} />
        <Route exact path ='/categories' component = {Categories} />
        <Route exact path ='/login' component = {Login} />
        <Route exact path ='/register' component = {Register} />

      
      </div>
      </Router>
  );
}

export default App;
