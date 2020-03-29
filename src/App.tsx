import React from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';



function App() {
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
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />
            <Route render={() => <Redirect to={{pathname: "/login"}} />} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
