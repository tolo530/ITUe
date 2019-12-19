import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';

export default class Registration extends Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        window.alert("A confirmation mail was sent to your email address. Please, follow the instructions from the email");
        window.location = "./Login";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-page">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary  btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/login">Sign in</a>
                </p>
            </form>
        );
    }
}
