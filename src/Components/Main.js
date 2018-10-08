import React, { Component } from 'react';
import NavHead from './NavHead';
import SearchBar from './Searchbar';

import LoadPins from './Pins'

class MainApp extends Component {
  render() {
    return (
      <div>
     <NavHead />
   
     <SearchBar />

     <LoadPins />

  

    
     </div>
    );
  }
}

export default MainApp;
