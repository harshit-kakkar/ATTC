import React from 'react';
import Navbar from '../Navbar'
import Homepage from '../Homepage'
import Vehicles from '../Vehicles'
import './styles.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';




const Main = () => {

    return (
        <Router>
            <div className="container">
                <div className="nav-div">
                    <Navbar/>
                </div>
                
                <div className="main-sec">
                    <Switch>
                        <Route path="/home" component={Homepage} />
                        <Route path="/vehicles" component={Vehicles} />
                        <Route render={() => <Redirect to={{pathname: "/home"}} />} />
                    </Switch>
                </div>

            </div>
        </Router>
        
    );
}

export default Main;