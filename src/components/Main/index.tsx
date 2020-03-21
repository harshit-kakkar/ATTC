import React from 'react';
import Navbar from '../Navbar'
import './styles.css'



const Main = () => {
    return (
        <div className="container">
            <div className="nav-div">
                <Navbar />
            </div>
            <div className="main-sec">
                <h2>Main section TEST</h2>
            </div>
        </div>
        
    );
}

export default Main;