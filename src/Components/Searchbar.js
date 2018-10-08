import React, { Component } from 'react';


class SearchBar extends Component {

state ={
  inputText:'',
  amount:15,
  apiUrl:'https://pixabay.com/api/',
  apiKey:'1721901-fa9bcc6ed3f879da0567a53bb',
  pins:[]
}

  render() {
    return (
      <div>
        
        <input name="inputText" value={this.state.inputText} 
        onChange={this.onTextChange} 
        
        type="text" placeholder="Búsqueda.."/>
      
      </div>
    );
  }
}

export default SearchBar;
