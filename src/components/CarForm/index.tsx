import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import './styles.css'


const CarForm = () => {

    const [selectedOption, setSelectedOption] = React.useState('Car')

    const { handleSubmit, register} = useForm();


    // const url = "http://localhost:5000/car"
    const url = 'https://attc-backend.herokuapp.com/car';
    const onSubmit = (data: any) => {
        data["car_type"] = selectedOption 
        axios.post(url, data)
            .then(response => {
                if(response.status===201){
                    alert("Added new car")
                }

            })
            .catch(error => {
                console.log(error)
                alert("Couldn't add car")
                
            })
    }



    return (
        <div className="admin-car-container">
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="car-details">
                    CAR DETAILS
                </div>
                <div className="car-info-container">
                    <div className="vehicle-phone">
                        <div className="vehicle-phone-text">
                            Phone Number
                        </div>
                        <div>
                            <input 
                                className="create-car-ip" 
                                name="phone"
                                ref={register}
                                />
                        </div>

                    </div>
                    <div className="vehicle-number">
                        <div className="vehicle-number-text">
                            Vehicle Number
                        </div>
                        <div>
                            <input 
                                className="create-car-ip"
                                name="car_number"
                                ref={register} 
                                />
                        </div>
                    </div>
                    <div className="vehicle-type">
                        <div className="vehicle-type-text">
                            Vehicle Type
                        </div>
                        <div>

                            <select 
                                className="dropdown-vehicle-type"
                                onChange={e => setSelectedOption(e.target.value)}>
                                >
                                <option value="Car">Car</option>
                                <option value="Bus">Bus</option>
                            </select>
                        </div>

                    </div>

                    <div className="car-add-btn-div">
                        <button className="car-details-add">
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CarForm