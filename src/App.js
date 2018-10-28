import React, { Component } from 'react';
import './App.css';

import SearchBar from './Components/Searchbar'


class App extends Component {
  render() {
    return (
      <div className="content">
      <div>

     <SearchBar />
     </div>
      </div>
    );
  }
}

export default App;
