import React from 'react';
import Navbar from '../Navbar'
import Homepage from '../Homepage'
import './styles.css'




const Main = () => {

    const [clickedTab, setClickedTab] = React.useState(1);

    const setSelectedTab = (selectedTab: number)=> {
        setClickedTab(selectedTab)
    }

    const loadSelectedTab = () => {
        if (clickedTab==1){
            return (
                <div className="main-sec">
                    <Homepage />

                </div>
            )
        }
    }


    return (
        <div className="container">
            <div className="nav-div">
                <Navbar />
            </div>
            
            {loadSelectedTab()}
            
        </div>
        
    );
}

export default Main;