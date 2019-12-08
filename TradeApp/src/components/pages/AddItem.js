import React, { Component } from "react";
import '../../../src/App.css';
import {items} from '../../../src/items.json';
import Header from '../../components/Header';

export default class AddItem extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            price: '',
            categorie: '',
            seller: '',
            description: '',
            phone: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddItem(this.state);
        this.setState ({
            title:'',
            price: '',
            categorie: '',
            seller: '',
            description: '',
            phone: ''

        })
    }

    render() {
        return (
        <div className="card">
            <h1>Add an item</h1>
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
              Title
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInput}
              placeholder="Name of the product"
              />
          </div>
          <div className="form-group">
            Seller
            <input
              type="text"
              name="seller"
              className="form-control"
              value={this.state.seller}
              onChange={this.handleInput}
              placeholder="Your name"
              />
          </div>
          <div className="form-group">
              Price
            <input
              type="number"
              name="price"
              className="form-control"
              value={this.state.price}
              onChange={this.handleInput}
              placeholder="Put a price"
              />
          </div>
          <div className="form-group">
              Phone
            <input
              type="text"
              name="phone"
              className="form-control"
              value={this.state.phone}
              onChange={this.handleInput}
              placeholder="Your phone"
              />
          </div>
          <div className="form-group">
              Description
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInput}
              placeholder="Add a nice description"
              />
          </div>
          <div className="form-group">
              Categorie
            <select
                name="categorie"
                className="form-control"
                value={this.state.categorie}
                onChange={this.handleInput}
              >
              <option>Food</option>
              <option>Drinks</option>
              <option>Cutlery</option>
              <option>Electrodomestic</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
        );
    }
}
