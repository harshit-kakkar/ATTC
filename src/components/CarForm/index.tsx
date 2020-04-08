import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import './styles.css'


const CarForm = () => {
    return (
        <div className="admin-car-container">
            
            <form>
                <div className="car-details">
                    CAR DETAILS
                </div>
                <div className="car-info-container">
                    <div className="vehicle-phone">
                        <div className="vehicle-phone-text">
                            Phone Number
                        </div>
                        <div>
                            <input className="create-car-ip" />
                        </div>

                    </div>
                    <div className="vehicle-number">
                        <div className="vehicle-number-text">
                            Vehicle Number
                        </div>
                        <div>
                            <input className="create-car-ip" />
                        </div>
                    </div>
                    <div className="vehicle-type">
                        <div className="vehicle-type-text">
                            Vehicle Type
                        </div>
                        <div>
                            <input className="create-car-ip" />
                        </div>

                    </div>

                    <button className="car-details-add">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CarForm