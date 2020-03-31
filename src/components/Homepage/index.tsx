import React from 'react'
import axios from 'axios'
import './styles.css'


let Name: string = 'Harshit'
let balanceMoney: number = 300

const Homepage = () => {

    

    return (
        
        <div className="homepage">
            <div className="welcome-text">
                <h1>Welcome {Name}</h1>
            </div>
            <div className="balance">
                <p>Your current balance is Rs {balanceMoney}</p>
            </div>
        </div>
        
    )
}

export default Homepage