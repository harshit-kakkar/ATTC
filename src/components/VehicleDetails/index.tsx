import React from 'react'
import './styles.css'
import axios from 'axios'


var toll_tax_price = 40;

const VehicleDetails = (props : any) => {

            // Populating the details of a vehicle using the below state.

    const [tollsCrossed, setTollsCrossed] = React.useState([])
    const PopulateTollDetails = ((tollsData : any) => {
        setTollsCrossed(tollsData)
    })

    var url = "http://localhost:5000/car-details"
    React.useEffect(() => {
        axios.get(url, {
            params: {
              vehicle_number: props.match.params.vehicle
            }
          })
          .then(response => {
              console.log(response.data)
              PopulateTollDetails(response.data)
          })
          .catch(error =>{
              console.log(error)
          })
    }, [])


    return (

        <div className="vehicle-details-container">
            <div className="vehicle-details-header">
                Details for the vehicle number  : {props.match.params.vehicle}
            </div>
            {/* {for_console(props)} */}

            <div className="all-tolls-container">
                {tollsCrossed.map((toll) => (
                    <div className="toll-container" key={Math.random()}>
                        <div className="toll-name">
                            {toll["toll_name"]} toll tax booth
                        </div>
                        <div className="toll-price">
                            Paid Rs {toll_tax_price}
                        </div>
                    </div>
                    
                ))}
            </div>

            

        </div>
    )

}

export default VehicleDetails