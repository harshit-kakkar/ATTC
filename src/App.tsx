import React, {useState} from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';



function App() {

              // The below state keeps the phone number of the user that gets updated on login and is passed as props to other components.

  const [phone, setPhone] = useState("12345")
  const changePhone = (phone: string) => {
    setPhone(phone)

  }

  return (
    <Router>
      <div className="App">

                                  {/* The header tag below contains the header for the whole application  */}

        <header className="App-header">
          <div className="head-container">
            <h1>Automated Toll Tax Collection</h1>
          </div>
          
          <div className="logout">
            <Link to='/login'><p className="logout-p">Logout</p></Link>
          </div>
          
        </header>

                                      {/* The section tag keeps on changing according to events and routes. */}

        <section className="section-container">
          <Switch>
              <Route 
                  path="/login"
                                          // Sending the function "changePhone", that can update the state above.
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
