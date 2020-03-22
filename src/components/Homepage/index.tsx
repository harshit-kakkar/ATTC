import React from 'react'
import './styles.css'


let welcomeText: string = 'Welcome Harshit'

const Homepage = () => {
    return (
        <div>
            <div className="welcome-text">
                <h1>{welcomeText}</h1>
            </div>
        </div>
    )
}

export default Homepage