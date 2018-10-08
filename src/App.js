import React, { Component } from 'react';
import './App.css';
import Exp from './Components/Fetch'
import MainApp from './Components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         <MainApp />
        </header>
        <Exp />
      </div>
    );
  }
}

export default App;
