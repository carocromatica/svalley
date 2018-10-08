import React, { Component } from 'react';
import NavHead from './NavHead';
import SearchBar from './Searchbar';

class MainApp extends Component {
  render() {
    return (
      <div>
     <NavHead />
   
     <SearchBar />
    
     </div>
    );
  }
}

export default MainApp;
