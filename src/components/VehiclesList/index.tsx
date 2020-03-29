import React from 'react'
import {Link} from 'react-router-dom'
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


const VehiclesList = () => {
    return (
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
                        <Link to={`/vehicle-details/${vehicle["Vehicle_Number"]}`}>
                            <div className="details-button">
                                <button>Details</button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default VehiclesList