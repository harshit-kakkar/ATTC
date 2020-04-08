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


    // const url = "http://localhost:5000/home";
    const url = "https://attc-backend.herokuapp.com/home";

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


    const [rechargeInputOpen, setRechargeInputOpen] = React.useState(false)
    const changeRechargeInputOpen = (() => {
        if (rechargeInputOpen){
            setRechargeInputOpen(false)
        }
        else{
            setRechargeInputOpen(true)
        }
    })

    function rechargeButtonText(){
        if (rechargeInputOpen){
            return "Cancel"
        }
        else{
            return "Recharge"
        }
    }

    const [input, setInput] = React.useState('');
 

    function rechargeConfirm(){
        changeRechargeInputOpen()
        var bal = parseInt(input, 10)
        var rechargeRequestData = {"phone" : phone_no, "balance" : bal}
        const rechargeUrl = "https://attc-backend.herokuapp.com/recharge"
        axios.put(rechargeUrl, rechargeRequestData)
            .then(response => {
                var newBalanceUpdate = {"name" : dataJson["name"], "balance" : response.data["balance"]}
                changeData(newBalanceUpdate)
            })
            .catch(error => {
                console.log(error)
            })
        
    }


    return (
        
        <div className="homepage">
            <div className="welcome-text">
                <h1>Welcome {dataJson["name"]}</h1>
            </div>
            <div className="balance">
                <p>Your current balance is Rs {dataJson["balance"]}</p>
            </div>

            <div className="recharge-container">
                <div>
                    <button className={!rechargeInputOpen? "recharge":"recharge-cancel"} onClick={changeRechargeInputOpen}>{rechargeButtonText()}</button>
                </div>

                <div className={rechargeInputOpen? "recharge-input":"recharge-input-close"}>
                    <input className="recharge-input-box" placeholder="Amount" value={input} onChange={(e) => setInput(e.target.value)}></input>
                    <button className="confirm-recharge-btn" onClick={rechargeConfirm}>Confirm</button>
                </div>
            </div>
        </div>
        
    )
}

export default Homepage