import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import './styles.css'



const Login = (props : any) => {

    //useForm hook to handle the form data.

    const { handleSubmit, register} = useForm();

    const onSubmit = (data: any) => {
        axios.post('http://localhost:5000/login', data)
            .then(response => {
              
                if (response.status = 200){   
                    props.setPhone(data.phone)

                    //Changing the route by pushing it to props sent by "Route" of the "react-router-dom"
                    props.history.push("/main/home")
                }
            })
            .catch(error => {
                alert("Incorrect Username/Password")
            })
    }


    return (
        <div className="login-container">
            <div className="login">
               <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-head">
                        Login
                    </div>
                    <div >
                        <input
                            className="input-phone" 
                            type="text" 
                            placeholder="phone"
                            name="phone"
                            ref={register}
                        />
                    </div>
                    <br></br>
                    <div>
                        <input 
                            className="input-password" 
                            type="password" 
                            placeholder="password"
                            name="password"
                            ref={register}
                        />
                    </div>
                    <br></br>
                        <button className="login-button">
                            Login
                        </button>
               </form>
            </div>

            
        </div>
    )
}

export default Login