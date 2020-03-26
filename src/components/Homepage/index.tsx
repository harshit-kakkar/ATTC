import React from 'react'
import Navbar from '../Navbar'
import './styles.css'


let welcomeText: string = 'Welcome Harshit'
let balanceMoney: number = 300

const Homepage = () => {
    return (
        <div className="container" >
            <div className="nav-div">
                <Navbar/>
            </div>
            <div className="homepage">
                <div className="welcome-text">
                    <h1>{welcomeText}</h1>
                </div>
                <div className="balance">
                    <p>Your current balance is Rs {balanceMoney}</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage