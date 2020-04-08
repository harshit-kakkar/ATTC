import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import './styles.css'
import UserForm from '../UserForm'
import CarForm from '../CarForm'



const AdminCreate = () => {


    const [btnClicked, setBtnClicked] = React.useState(1)
    console.log(btnClicked)
    const changeBtnClicked = ((val: number)=> {
        setBtnClicked(val)
    })

    function LoadForm(){
        if (btnClicked==1){
            return(
                <UserForm />
            )
        }
        else {
            return (
                <CarForm />
            )
        }
    }

    return (
        <div className="admin-create-container">
            <div className="user-car-btn-container" >
                <div className="user-btn" onClick={()=>changeBtnClicked(1)}>
                    Create User
                </div>
                <div className="car-btn" onClick={()=>changeBtnClicked(2)}>
                    Add Car
                </div>
            </div>

            {LoadForm()}
            
        </div>
    )
}


export default AdminCreate