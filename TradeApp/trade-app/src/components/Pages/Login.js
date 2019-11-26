import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1>
                    Login
                </h1>
                <p>
                    Registered user will log here
                </p>
                <p>
                    Username <input type="text" /> 
                </p>
                <p>
                    Password <input type="text" /> 
                </p>
                <p>
                    <button>Login</button>
                </p>

            </div>
        );
    
    }
}

export default Login;