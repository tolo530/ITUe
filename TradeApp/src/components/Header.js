import React, { Component } from "react";


export default class Header extends Component {
  constructor(){
    super();
    
  }
  
    render(){
      return (
        <header>
          <nav>
            <ul className="navItems">
              <li className="navigation">
                <a href="/">Home</a>
              </li>
              <li className="user-options">
                <button type="button" class="badge badge-pill badge-warning">
                Favourites <span class="badge badge-light"> 0 </span>
                </button>
              </li>
              <li className="user-options"> 
                <a href="/AddItem">Add</a>
              </li>
              <li className="user-options"> 
                <a href="/login">Login</a>
              </li>
              <li className="user-options">
                <a href="/registration">Register</a>
              </li>
            </ul>
          </nav>
        </header>
  
      );
     

    }

  }
  