import React from 'react'
import axios from 'axios'
import './styles.css'




const Homepage = (props : any) => {
    // var Name: string = 'Harshit'
    // let balanceMoney: number = 300
    const [dataJson, setDataJson] = React.useState({"name": "User", "balance" : "Undefined"})

    var phone_no = props.phone
    var phone_json = {"phone" : phone_no}


    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://localhost:5000/home";
    axios.post(url, phone_json)
            .then(response => {
                console.log(response.data["name"])
                setDataJson(response.data)
            })
            .catch(error => {
                console.log(error)
            })

    return (
        
        <div className="homepage">
            <div className="welcome-text">
                <h1>Welcome {dataJson["name"]}</h1>
            </div>
            <div className="balance">
                <p>Your current balance is Rs {dataJson["balance"]}</p>
            </div>
        </div>
        
    )
}

export default Homepage