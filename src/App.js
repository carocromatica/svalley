import React, { Component } from 'react';
import './App.css';
import NavHead from './Components/NavHead'
import SearchBar from './Components/Searchbar'


class App extends Component {
  render() {
    return (
      <div className="content">
      <div>
      <NavHead />
     <SearchBar />
     </div>
      </div>
    );
  }
}

export default App;
