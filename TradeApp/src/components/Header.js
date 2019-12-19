import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
  }

  getCartCount(){
    var cart = JSON.parse(localStorage.getItem("items"));
    if(!cart){
      return 0;
    }

    return cart.length;
  }

  render() {
    return (
      <header>
        <nav>
          <ul className="navItems">
            <li className="navigation">
              <a href="/">Home</a>
            </li>
            <li className="user-options">
              {/* <button type="button" class="badge badge-pill badge-warning">
                 <span class="badge badge-light">  </span>
              </button>
               */}
              <a href="/Cart">Cart ({ this.getCartCount() })</a>
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
