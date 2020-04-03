import React from 'react'
import VehicleDetails from '../VehicleDetails'
import VehiclesList from '../VehiclesList'
import './styles.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'



// This component is like a middle-ground for the whole user-vehicles requests i.e. -
//        1. To view the vehicles list he owns, "VehiclesList" component.
//        2. To view the details of a particular vehicle he/she owns, "VehicleDetails" component.


const Vehicles = (props:any)=>{

    var phone_no = props.phone
    var userId = props.userId
    
    return (
        
        <Router>
            <Switch>
                <Route 
                    path="/main/vehicles" 
                    render={(props) => <VehiclesList {...props} phone={phone_no} userId={userId} />} 
                    />
                <Route path="/vehicle-details/:vehicle" component={VehicleDetails} />
            </Switch>
        </Router>

    )
}

export default Vehicles