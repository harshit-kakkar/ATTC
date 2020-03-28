import React from 'react'
import Navbar from '../Navbar'
import './styles.css'

var vehicles = [
    {
        "Vehicle_Number" : "WQ123",
        "Vehicle_Type" : "Car"
    },
    {
        "Vehicle_Number" : "HR789",
        "Vehicle_Type" : "Truck"
    }

]

const Vehicles = ()=>{
    
    return (
        <div className="container">
            <div className="nav-div">
                <Navbar/>
            </div>
            <div className="vehicles">
                <div className="vehicles-head">
                    Here are the details of the vehicles you own : 
                </div>
                <div className="vehicles-list">
                    {vehicles.map((vehicle) => (
                        <div className="vehicle-container" key={vehicle["Vehicle_Number"]}>
                            <div className="vehicle-details">
                                <div className="vehicle-number">
                                    Vehicle Number : {vehicle["Vehicle_Number"]}
                                </div>
                                <div className="vehicle-type">
                                    Vehicle Type : {vehicle["Vehicle_Type"]}
                                </div>
                            </div>
                            <div className="details-button">
                                <button>Details</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Vehicles