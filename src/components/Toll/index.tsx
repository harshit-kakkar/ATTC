import React from 'react'
import axios from 'axios'
import './styles.css'
import { useForm } from 'react-hook-form'


const Toll = () => {

    const [image, setImage] = React.useState({ preview: '', raw: '' })

    const [indication, setIndication] = React.useState(false)

    const { handleSubmit, register } = useForm();

    const url = 'https://attc-backend.herokuapp.com/toll-crossed';
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

    const handleChange = (e: any) => {
        setImage({
            preview: URL.createObjectURL(e.target.files[0]),

            raw: e.target.files[0]
        })
    }

    const machineLeaning = () => {

        // const formData = new FormData();
        // formData.append('url', image.raw)
        // formData.append('lang', 'eng')



        axios.post('https://api.ocr.space/parse/image',
            {
                body: { 'url': { image: image.raw }, 'language': 'eng' }

            },
            {
                headers: { 'apikey': 'helloworld' },
            })
            .then(response => {
                // console.log(response)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)


            })

        console.log(image.raw)
        // var reader = new FileReader();
        // reader.readAsDataURL(); 
        // reader.onloadend = function() {
        //     var base64data = reader.result;                
        //     console.log(base64data);
        // }


        console.log(image.preview)
        let x = image.raw
        console.log(typeof (x))

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