import React from 'react';
import './styles.css'
import {NavLink} from 'react-router-dom'

const TabInit = () => {
    if (window.location.pathname=='/home'){
        return 1
    }
    else{
        return 2
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
                <NavLink to='/home' exact activeClassName="active" >
                    <li onClick={()=>setSelectedTab(1)}
                        className={clickedTab!==1? "": "selected-tab-nav"}
                    >Home</li>
                </NavLink>
                <NavLink to='vehicles' exact activeClassName="active">
                    <li 
                    onClick={()=>setSelectedTab(2)}
                    className={clickedTab!==2? "": "selected-tab-nav"}
                    >Vehicles</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navbar