import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom'

interface NavbarProps {
    setClickedTab: (clickedTab:number) => void;
}

const Navbar = (props:NavbarProps) => {
    return (
        <div className="sidenav">
            <ul>
                <Link to='/home'>
                    <li className="home-nav">Home</li>
                </Link>
                <Link to='vehicles'>
                    <li>Vehicles</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar