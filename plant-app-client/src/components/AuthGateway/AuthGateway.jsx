import React, {Component} from 'react'
import Register from '../Register/Register'
import Login from './Login/Login'
import PlantNav from '../nav'
class AuthGateway extends Component {
    constructor(){
        super();
        
    }
    render(){
        return(
            <div>
                <PlantNav/>
                <h1>Register as a new User</h1>
                <Register handleRegister={this.props.handleRegister} />
                <h1>Login</h1>
                <Login handleLogin={this.props.handleLogin}/>
            </div>
        )
    }
}

export default AuthGateway