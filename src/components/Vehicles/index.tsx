import React from 'react'
import VehicleDetails from '../VehicleDetails'
import VehiclesList from '../VehiclesList'
import './styles.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'




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