import React from 'react';
import './App.css';
import Main from './components/Main'


function App() {
  return (
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
  );
}

export default App;
