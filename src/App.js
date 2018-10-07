import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Exp from './Components/Fetch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Exp />
      </div>
    );
  }
}

export default App;
