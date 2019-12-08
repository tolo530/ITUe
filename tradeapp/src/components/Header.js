import React from 'react';

function Header() {

    return (
       
      <header>
        <nav>
          <ul className="navItems">
            <li className="navigation">
              Home
            </li>
            <li className="navigation">
              Categories
            </li>
            <li className="user-options"> 
              Login
            </li>
            <li className="user-options">
              Register
            </li>
          </ul>
        </nav>
      </header>

    );
   
  }
  
  export default Header;