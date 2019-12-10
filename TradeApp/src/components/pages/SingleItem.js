import React, { Component } from 'react'

// class Registration extends Component {

// }
// export default Registration

// import React, { Component } from "react";

export default class Registration extends Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        window.alert("A confirmation mail was sent to your email address. Please, follow the instructions from the email");
    }

    render() {
        return (
            
        );
    }
}
