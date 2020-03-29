import React from 'react'
import VehicleDetails from '../VehicleDetails'
import VehiclesList from '../VehiclesList'
import './styles.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'




const Vehicles = ()=>{
    
    return (
        
        <Router>
            <Switch>
                <Route path="/main/vehicles" component={VehiclesList} />
                <Route path="/vehicle-details/:vehicle" component={VehicleDetails} />
            </Switch>
        </Router>

    )
}

export default Vehicles