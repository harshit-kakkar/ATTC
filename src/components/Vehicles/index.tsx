import React from 'react'
import Navbar from '../Navbar'
import './styles.css'


const Vehicles = ()=>{
    
    return (
        <div className="container">
            <div className="nav-div">
                <Navbar/>
            </div>
            <div className="vehicles">
                <h1>
                    Vehicles Test
                </h1>
            </div>
        </div>
    )
}

export default Vehicles