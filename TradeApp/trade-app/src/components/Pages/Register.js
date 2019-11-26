import React, {Component} from 'react';

class Register extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1>
                    Register
                </h1>
                <p>
                    Unregistered users will register here
                </p>
                <p>
                    Username  <input type="text" /> 
                </p>
                <p>
                    Password  <input type="text" />
                </p>
                    Repeat Password <input type="text" />
                <p>
                    Email <input type="text" />
                </p>
                <p>
                    <button>Register</button>
                </p>

                
            </div>
        );
    
    }
}

export default Register;