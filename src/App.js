import React, { Component } from 'react';
import './App.css';
import Exp from './Components/Fetch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         <h1>Pinterest - react</h1>
        </header>
        <Exp />
      </div>
    );
  }
}

export default App;
