import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
// import './styles.css'



const UserForm = () => {


    const { handleSubmit, register} = useForm();

    const url = 'https://attc-backend.herokuapp.com/signup';
    const onSubmit = (data: any) => {
        axios.post(url, data)
            .then(response => {
                console.log(response)
                if(response.status == 200){
                    alert("Created new user")
                }
            })
            .catch(error => {
                console.log(error)
                alert("Couldn't create the User")
                
            })
    }



    return (


        <div className="admin-user-form">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                    <input 
                                        className="create-user-ip" 
                                        name="first_name"
                                        ref={register}
                                        />
                                </div>
                            </div>
                            <div className="last-name">
                                <div className="last-name-text">
                                    Last Name
                                </div>
                                <div className="last-name-input">
                                    <input 
                                        className="create-user-ip" 
                                        name="last_name"
                                        ref={register}
                                        />
                                </div>
                            </div>
                        </div>

                        <div className="phone-user">
                            <div className="phone-text">
                                Phone No. 
                            </div>

                            <div className="phone-ip">
                                <input 
                                    className="create-user-ip" 
                                    name="phone"
                                    ref={register}
                                    />
                            </div>
                        </div>

                        <div className="password-user">
                            <div className="password-text">
                                Password
                            </div>
                            <div className="password-ip">
                                <input 
                                    className="create-user-ip" 
                                    name="password"
                                    ref={register}
                                    />
                            </div>
                            
                        </div>

                        <button className="user-details-submit">
                            Submit
                        </button>                  


                    </div>
                </form>

            </div>



    )
}

export default UserForm