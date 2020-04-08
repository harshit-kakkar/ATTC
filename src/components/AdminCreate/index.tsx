import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import './styles.css'


const AdminCreate = () => {
    return (
        <div className="admin-create-container">
            <div className="user-car-btn-container">
                <div className="user-btn">
                    Create User
                </div>
                <div className="car-btn">
                    Add Car
                </div>
            </div>
            <div className="admin-user-form">
                <form>
                    <div className="user-details">
                        USER DETAILS
                    </div>
                    <div className="user-info-container">


                        <div className="name">
                            <div className="first-name">
                                <div className="first-name-text">
                                    First Name
                                </div>
                                <div className="first-name-input">
                                    <input className="create-user-ip" />
                                </div>
                            </div>
                            <div className="last-name">
                                <div className="last-name-text">
                                    Last Name
                                </div>
                                <div className="last-name-input">
                                    <input className="create-user-ip" />
                                </div>
                            </div>
                        </div>

                        <div className="phone-user">
                            <div className="phone-text">
                                Phone
                            </div>

                            <div className="phone-ip">
                                <input className="create-user-ip" />
                            </div>
                        </div>

                        <div className="password-user">
                            <div className="password-text">
                                Password
                            </div>
                            <div className="password-ip">
                                <input className="create-user-ip" />
                            </div>
                            
                        </div>

                        <button className="user-details-submit">
                            Submit
                        </button>                  


                    </div>
                </form>

            </div>
        </div>
    )
}


export default AdminCreate