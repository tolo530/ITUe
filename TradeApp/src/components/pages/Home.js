import React, { Component } from 'react';

import '../../../src/App.css';
import {items} from '../../../src/items.json';
import Header from '../../components/Header';
//import image from '../pages/vga.png';
import image from '../../images/placeholder.png';




class Home extends Component {

  constructor(){
    super();
    this.state = {items}
  }

  render(){

    const items = this.state.items.map((items, i) => {

      return (
        <div className="col-md-4" key={i}>
        <div className="card">
        <img src={image} key={i} />
        <div className="card-body">
          <h5 className="card-title">{items.title}</h5>
          <p className="card-text">{items.description}</p>
          <button type="button" className="button-wrapper btn btn-outline-info btn-sm">View</button>
          <button type="button" className="button-wrapper btn btn-outline-danger btn-sm">Add to cart</button>
          
        </div>
      </div>
      </div>
      )
    })

    return (
      
      <div className="Home">
        <div className = "container">
          <input type="search"></input>
          <button className="btn btn-primary btn-sm">Search</button>
          <div className="row mt-4">
            {items}
          </div>
        </div>

      </div>
    )
  }
}

export default Home;
