import React from 'react'
import './styles.css'

// interface any{
//     car_number : number
// }
// function for_console(props1 : any){
//     console.log(props1.match.params.vehicle)
// }

const VehicleDetails = (props : any) => {
    return (

        <div className="vehicle-details-container">
            <div>
                Details for the vehicle number  : {props.match.params.vehicle}
            </div>
            {/* {for_console(props)} */}

            

        </div>
    )

}

export default VehicleDetails