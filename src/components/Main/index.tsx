import React from 'react';
import Navbar from '../Navbar'
import Homepage from '../Homepage'
import Vehicles from '../Vehicles'
import './styles.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




const Main = (props : any) => {
    var phone_no = props.phone
    const [userId, setUserId] = React.useState(-1);
    console.log(userId)

    return (
        <Router>
            <div className="container">
                <div className="nav-div">
                        <Navbar/>
                </div>
                    <Switch>
                        <Route 
                            path="/main/home" 
                            render={(props) => <Homepage {...props} phone={phone_no} changeId={setUserId} />}
                        />

                        <Route 
                            path="/main/vehicles" 
                            render={(props) => <Vehicles {...props} phone={phone_no} userId={userId} />}
                        />
                    </Switch>
            </div>

        </Router>
        
    );
}

export default Main;