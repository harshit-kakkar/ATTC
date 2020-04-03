import React from 'react'
import axios from 'axios'
import './styles.css'

const Homepage = (props : any) => {
    const [dataJson, setDataJson] = React.useState({"name": "User", "balance" : "Undefined"})
    const changeData = ((newData: any) => {
        setDataJson(newData)
        
    })

    var phone_no = props.phone
    var phone_json = {"phone" : phone_no}


    const url = "http://localhost:5000/home";

    React.useEffect(()=>{
        axios.post(url, phone_json)
        .then(response => {
            props.changeId(response.data["id"])
            changeData(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])


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