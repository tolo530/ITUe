import React, { Component } from "react";
import '../../../src/App.css';

export default class Cart extends Component {
  constructor() {
    super();
  }

  getCart(){
    var cart = JSON.parse(localStorage.getItem("items")); //get item/string from local storage and parse it to JS object
    if(!cart){
      return [];
    }

    return cart;
  }

  clearCart(){
    localStorage.setItem("items", JSON.stringify([]));
    this.forceUpdate();
  }

  render() {
    var items = this.getCart().map((item) => {
      return (
        <li><h5>{item.title} {item.price}€</h5></li>
      )
    })
    
    return (
      <div>
        <h3>Items in cart:</h3>
        <ul>
          {items}
        </ul>
        <button type="button" className="button-wrapper btn btn-outline-danger btn-sm" onClick={() => this.clearCart()}>Clear cart</button>
      </div>
    );
  }
}

