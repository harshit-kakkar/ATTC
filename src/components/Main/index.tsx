import React from 'react';
import Homepage from '../Homepage'
import Vehicles from '../Vehicles'
import Login from '../Login'
import './styles.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';




const Main = () => {

    return (
        <Router>
            <div>

                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Homepage} />
                        <Route path="/vehicles" component={Vehicles} />
                        <Route render={() => <Redirect to={{pathname: "/login"}} />} />
                    </Switch>
                </div>

            </div>
        </Router>
        
    );
}

export default Main;