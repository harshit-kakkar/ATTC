import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login">
                <div className="login-head">
                    Login
                </div>
                <div ><input className="input-phone" type="text" placeholder="Phone"/></div>
                <br></br>
                <div><input  className="input-password" type="password" placeholder="password"/></div>
                <br></br>
                <Link to='/main/home'>
                    <button className="login-button">
                        Login
                    </button>
                </Link>
            </div>

            
        </div>
    )
}

export default Login