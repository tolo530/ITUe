import React from 'react';
import{Link} from 'react-router-dom';
import logoIm from '../../logo.png';

function Header() {
  return (
    <header>
        <div className="logo">
           Logo
        </div>

        <nav>
            <ul>
                <li class="navigate">
                    <Link to ="/">Home</Link>
                </li>
                <li class="navigate">
                    <Link to ="/categories">Categories</Link>
                </li>
                <li class="userOptions">
                    <Link to ="/login">Login</Link>
                </li>
                <li class="userOptions">
                    <Link to ="/register">Register</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
