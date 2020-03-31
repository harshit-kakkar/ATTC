import React from 'react';
import Navbar from '../Navbar'
import Homepage from '../Homepage'
import Vehicles from '../Vehicles'
import './styles.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




const Main = (props : any) => {

    return (
        <Router>
            <div className="container">
                <div className="nav-div">
                        <Navbar/>
                </div>
                    <Switch>
                        <Route 
                            path="/main/home" 
                            component={Homepage} 
                        />

                        <Route 
                            path="/main/vehicles" 
                            component={Vehicles} 
                        />
                    </Switch>
            </div>

        </Router>
        
    );
}

export default Main;