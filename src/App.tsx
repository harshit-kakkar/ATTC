import React from 'react';
import './App.css';
import Main from './components/Main'
import {BrowserRouter as Router,} from 'react-router-dom';



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
        <section>
          <Main />
        </section>
      </div>
    </Router>
  );
}

export default App;
