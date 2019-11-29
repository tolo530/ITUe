import React, {Component} from 'react';
import loginI from '../../login.png';
import ReactTooltip from 'react-tooltip'


class Login extends Component{
    render(){
        return(
            <div className="container-fluid" id="login">
                <h1>
                    Login
                </h1>
                <p>
                    <img src={loginI} id="loginIMG"></img>
                </p>
                <p>
                    Username <input type="text" /> 
                </p>
                <p>
                    Password <input type="password" /> 
                </p>
                <p>
                    <button>Login</button>
                </p>

            </div>
        );
    
    }
}

export default Login;