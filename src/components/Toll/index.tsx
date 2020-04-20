import React from 'react'
import axios from 'axios'
import './styles.css'
import { useForm } from 'react-hook-form'




const Toll = () => {


    const [image, setImage] = React.useState({ image_file: '', image_preview: '' })

    const [numberPlate, setNumberPlate] = React.useState('')

    const [indication, setIndication] = React.useState(false)

    const { handleSubmit, register } = useForm();

    const url = 'https://attc-backend.herokuapp.com/toll-crossed';

    const apiUrl = 'https://api.ocr.space/parse/image';











    const onSubmit = (data: any) => {

        //IMPORTANT
        data["toll"] = 1
        // here taking the toll id to be 1 for simplicity.
        // Can be changed later when login is created for toll .

        console.log(data)
        axios.post(url, data)
            .then(response => {
                if (response.status === 200) {
                    setIndication(true)

                    //After 5 seconds the green indication background will again turn red for another vehicle.
                    setTimeout(function () {
                        setIndication(false)
                    }, 5000);
                }
            })
            .catch(error => {
                console.log(error)


            })
    }








    const handleChange = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0]);
        let image_as_files = e.target.files[0]

        setImage({
            image_preview: image_as_base64,
            image_file: image_as_files

        })
    }




    const machineLeaning = () => {

        let formData = new FormData()
        formData.append('base64', image.image_file)

        axios.post(
            apiUrl,
            formData,
            {
                headers: {
                    'apikey': 'helloworld',
                    'Content-Type': 'mulitpart/form-data',
                }
            }
        )

            .then(response => {

                console.log(response.data.ParsedResults[0].ParsedText)
                setNumberPlate(response.data.ParsedResults[0].ParsedText)


            })

            .catch(err => {
                console.log(err)
            })







    }



    return (
        <div className="at-toll-container">
            <div className="image-upload-toll">
                <div className="files-upload-head">
                    Files Upload
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>

                        {/* Not used ref for uploading image since it is still unclear as to how image will be processed. */}

                        <input
                            className="image1-upload"
                            type="file"
                            name="car_image"
                            onChange={handleChange}


                        >

                        </input>
                        <button onClick={machineLeaning} >Apply ML</button>

                    </div>
                    <div>


                        {/* Providing the option to write the car number for testing purpose. Should be removed later when image input works. */}
                        <input
                            className="toll-car-number-manual-input"
                            placeholder="Car Number"
                            defaultValue={numberPlate}
                            name="car_number"
                            ref={register}
                        >

                        </input>
                    </div>

                    <button className="toll-car-number-submit">
                        Submit
                    </button>
                </form>
            </div>
            <div className={!indication ? "toll-indication-off" : "toll-indication-on"}>
                Indication
            </div>
        </div>
    )
}

export default Toll