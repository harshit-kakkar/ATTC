import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import axios from 'axios'


const VehiclesList = (props : any) => {

    const [vehiclesList, setVehiclesList] = React.useState([])
    const PopulateVehiclesList = ((vehiclesData: any) => {
        setVehiclesList(vehiclesData)
    }) 

    var url = "http://localhost:5000/car"
    
    React.useEffect(() => {
        axios.get(url, {
            params: {
              user_id: props.userId
            }
          })
            .then(response => {
                PopulateVehiclesList(response.data)
                })
            .catch(error => {
                console.log(error)
                })
    }, [])
      






    return (
        <div className="vehicles">
            <div className="vehicles-head">
                Here are the details of the vehicles you own : 
            </div>
            <div className="vehicles-list">
                {vehiclesList.map((vehicle) => (
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