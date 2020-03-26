import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const Login = () => {
    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <Link to='/home'>
                <button>
                    Login
                </button>
            </Link>
            
        </div>
    )
}

export default Login