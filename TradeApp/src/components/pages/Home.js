import React, { Component } from 'react';

import '../../../src/App.css';
import {items} from '../../../src/items.json';
import Header from '../../components/Header';
// import images from '../../..src/images';




class Home extends Component {

  constructor(){
    super();
    this.state = {items}
  }

  render(){

    const items = this.state.items.map((items, i) => {
      return (
          <div className="col-md-4" key={i}>
            <div className="card mt-5">
               <div className="card-header">
              
                 <img src={items.image} key={i} />
                 <h4>
                  {items.title}
                </h4>
          </div>
          <div className="class-body">
            <p>
              <span className="description">
              {items.description}
              </span>
            </p>
            <p>
              <span className="phone">
                {items.phone}
              </span>
              <span className="price">
                <span className="badge badge-primary">
                  {items.price+"€"}
                </span>
              </span>
              
            </p>
          </div>
        </div>

          </div>
      )
    })

    return (
      
      <div className="Home">
        <div className = "container">
          <input type="search"></input>
          <button class="btn btn-primary">Search</button>
          <div className="row mt-4">
            {items}
          </div>
        </div>

      </div>
    )
  }
}

export default Home;
