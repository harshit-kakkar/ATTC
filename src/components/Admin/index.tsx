import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'



const Admin = (props:any) => {
 //useForm hook to handle the form data.

 const { handleSubmit, register} = useForm();

 const onSubmit = (data: any) => {
    //  axios.post('http://localhost:5000/login', data)
     axios.post('https://attc-backend.herokuapp.com/admin', data)
         .then(response => {
                
                    if( response.status == 200){
                        props.history.push("/admin/create")
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
                     Admin Login
                 </div>
                 <div >
                     <input
                         className="input-phone" 
                         type="text" 
                         placeholder="Username"
                         name="username"
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

export default Admin
