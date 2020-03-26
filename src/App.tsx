import React from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';



function App() {
  // function LoadFunction(){
  //   if (window.location.pathname=='/login'){
  //     return(
  //       <Login />
  //     )
  //   }
  //   else{
  //     return(
  //       <Main />
  //     )
  //   }
  // }
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
        <section>
          {/* {LoadFunction()} */}
          <Main />
        </section>
      </div>
    </Router>
  );
}

export default App;
