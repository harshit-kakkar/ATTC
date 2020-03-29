import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom'

const TabInit = () => {
    if (window.location.pathname==='/main/vehicles'){
        return 2
    }
    else{
        return 1
    }
}


const Navbar = () => {

    const [clickedTab, setClickedTab] = React.useState(TabInit());
    const setSelectedTab = (selectedTab: number)=> {
        setClickedTab(selectedTab)
    }


    return (
        <div className="sidenav">
            <ul>
                <Link to='/main/home'>
                    <li onClick={()=>setSelectedTab(1)}
                        className={clickedTab!==1? "": "selected-tab-nav"}
                    >Home</li>
                </Link>
                <Link to='/main/vehicles'>
                    <li 
                    onClick={()=>setSelectedTab(2)}
                    className={clickedTab!==2? "": "selected-tab-nav"}
                    >Vehicles</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar