import React from 'react';
import plus from '../plus.png';

function Header() {

    return (
       
      <header>
        <nav>
          <ul className="navItems">
            <li className="navigation">
              <a href="/">Home</a>
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
  
  export default Header;