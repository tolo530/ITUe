import React, { Component } from 'react';

import '../../../src/App.css';
import { items } from '../../../src/items.json';
import Header from '../../components/Header';
import image from '../../images/placeholder.png';
import Category from '../CategoryNav';

class Home extends Component {

  constructor() {
    super();
    this.state = { items };
  }

  addToCart(item){
    var cart = JSON.parse(localStorage.getItem("items"));
    
    if(!cart){
      cart = [];
    }

    cart.push(item);
    localStorage.setItem("items", JSON.stringify(cart));
  }

  render() {
    const items = this.state.items.map((item, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card">
            <img src={image} key={i} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h4 className="badge badge-dark">{item.price + "€"}</h4>
              <p className="card-text">{item.description}</p>
              <button type="button" className="button-wrapper btn btn-outline-info btn-sm">View</button>
              <button type="button" className="button-wrapper btn btn-outline-danger btn-sm" onClick={() => this.addToCart(item)}>Add to cart</button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="Home">
        <div className="container">
          <Category />
          <div className="row mt-4">
            {items}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
