import React, {useState} from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';



function App() {

  const [phone, setPhone] = useState("")
  const changePhone = (phone: string) => {
    setPhone(phone)

  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="head-container">
            <h1>Automated Toll Tax Collection</h1>
          </div>
          <div className="logout">
            <p>Logout</p>
          </div>
        </header>
        <section className="section-container">
          <Switch>
              <Route 
                  path="/login"
                  render={(props) => <Login {...props} setPhone={changePhone} />}
                />
            <Route 
                  path="/main" 
                  render={(props) => <Main {...props} phone={phone} />} 
                />
            <Route render={() => <Redirect to={{pathname: "/login"}} />} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
