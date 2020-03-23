import React from 'react';
import Navbar from '../Navbar'
import Homepage from '../Homepage'
import Vehicles from '../Vehicles'
import './styles.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




const Main = () => {

    const [clickedTab, setClickedTab] = React.useState(1);

    const setSelectedTab = (selectedTab: number)=> {
        setClickedTab(selectedTab)
    }

    const loadSelectedTab = () => {
        if (clickedTab==1){
            return (
                    <Homepage />

            )
        }

        if (clickedTab==2){
            return (
                    <Vehicles />
            )
        }
    }


    return (
        <div className="container">
            <div className="nav-div">
                <Navbar setClickedTab ={setSelectedTab}/>
            </div>
            
            <div className="main-sec">
                {loadSelectedTab()}
            </div>

        </div>
        
    );
}

export default Main;