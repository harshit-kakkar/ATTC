import React from 'react';
import './styles.css'

interface NavbarProps {
    setClickedTab: (clickedTab:number) => void;
}

const Navbar = (props:NavbarProps) => {
    return (
        <div className="sidenav">
            <ul>
                <li><a onClick={()=>{props.setClickedTab(1)}}>Home</a></li>
                <li><a onClick={()=>{props.setClickedTab(2)}}>Vehicles</a></li>
            </ul>
        </div>
    )
}

export default Navbar