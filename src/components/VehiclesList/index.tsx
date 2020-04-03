import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import axios from 'axios'


const VehiclesList = (props : any) => {


                //The below state holds an array of vehicles that a user owns.
    const [vehiclesList, setVehiclesList] = React.useState([])
    const PopulateVehiclesList = ((vehiclesData: any) => {
        setVehiclesList(vehiclesData)
    }) 

    var url = "http://localhost:5000/car"
    
    React.useEffect(() => {
                    //Sending the id of the user as parameter and not in the body, since it is a get request.
        axios.get(url, {
            params: {
              user_id: props.userId
            }
          })
            .then(response => {
                        //Sending the response from the backend to the function "PopulateVehiclesList" to update the state above. 
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
                                        {/* Using map to create the div again and again for each vehicle data from backend. */}
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
                                                    {/* Linking to the "VehicleDetails" component */}
                        <Link to={`/vehicle-details/${vehicle["Vehicle_Number"]}`}>
                            <div className="details-button-div">
                                <button className="details-btn">Details</button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default VehiclesList