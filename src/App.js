import React, { Component } from 'react';
import './App.css';
import NavHead from './Components/NavHead'
import SearchBar from './Components/Searchbar'
import LoadPins from './Components/Pins'

class App extends Component {
  render() {
    return (
      <div className="content">
      <div>
     <NavHead />
     <SearchBar />
     <LoadPins />
     </div>
      </div>
    );
  }
}

export default App;
