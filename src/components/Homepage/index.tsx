import React from 'react'
import axios from 'axios'
import './styles.css'


var x = 0;



const Homepage = (props : any) => {
    var Name: string = '1'
    // let balanceMoney: number = 300
    const [dataJson, setDataJson] = React.useState({"name": "User", "balance" : "Undefined"})
    const changeData = ((newData: any) => {
        if ((newData["name"] === dataJson["name"]) && (newData["balance"] === dataJson["balance"])){
            console.log("Names are same")
        }
        else{
            console.log("Names are different")
            setDataJson(newData)
        }
        
    })

    var phone_no = props.phone
    var phone_json = {"phone" : phone_no}


    const url = "http://localhost:5000/home";
    axios.post(url, phone_json)
            .then(response => {
                console.log(response.data)
                x = x+1;
                console.log(x) 
                changeData(response.data)
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