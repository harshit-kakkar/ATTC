import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom'


//Below function is used to initialize the state. Created to keep the highlighted element in sync with url even after a refresh.
const TabInit = () => {
    if (window.location.pathname==='/main/vehicles'){
        return 2
    }
    else{
        return 1
    }
}


const Navbar = () => {


    // The state is used to keep the current element on navbar, highlighted.
    const [clickedTab, setClickedTab] = React.useState(TabInit());
    const setSelectedTab = (selectedTab: number)=> {
        setClickedTab(selectedTab)
    }


    return (
        <div className="sidenav">
            <ul>
                <Link to='/main/home'>
                                         {/* setting the highlighted tab on "onclick"  */}
                    <li onClick={()=>setSelectedTab(1)}
                                // Giving the className only if the state of the clicked tab is 1.
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