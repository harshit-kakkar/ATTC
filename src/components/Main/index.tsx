import React from 'react';
import Navbar from '../Navbar'
import Homepage from '../Homepage'
import Vehicles from '../Vehicles'
import './styles.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




const Main = (props : any) => {
    var phone_no = props.phone

                            //Below is a state to keep the id of the user we get from the backend in "Homepage" component.
    const [userId, setUserId] = React.useState(-1);

    return (
        <Router>
            <div className="container">
                <div className="nav-div">
                        <Navbar/>
                </div>
                    <Switch>
                        <Route 
                            path="/main/home" 
                                        // sending the function "setUserId" as props to the Homepage component so that it can update it.
                            render={(props) => <Homepage {...props} phone={phone_no} changeId={setUserId} />}
                        />

                        <Route 
                            path="/main/vehicles" 
                                        //sending the userId and phone number as props to vehicles component.
                            render={(props) => <Vehicles {...props} phone={phone_no} userId={userId} />}
                        />
                    </Switch>
            </div>

        </Router>
        
    );
}

export default Main;