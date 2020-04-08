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
                    <div>
                        User Details
                    </div>
                    <div className="Name">
                        <div>
                            <input />
                        </div>
                        <div>
                            <input />
                        </div>
                    </div>
                    <div className="phone-admin">
                        <input />
                    </div>
                    <div className="password">
                        <input />
                    </div>
                </form>

            </div>
        </div>
    )
}


export default AdminCreate