import React, { Component } from 'react';
import axios from 'axios'
import LoadPins from './Pins'

class SearchBar extends Component {
  
  state = {
    inputText: '',
    amount:200,
    apiUrl:'https://pixabay.com/api/',
    apiKey:'1721901-fa9bcc6ed3f879da0567a53bb',
    pins:[]
  };

  

  onTextChange = e => {
    const input = e.target.value;
    this.setState({ [e.target.name]: input }, () => {
      if (input === '') {
        axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=flower&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res => this.setState({ pins: res.data.hits }))
        .catch(err => console.log(err));
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.inputText}&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
          .then(res => this.setState({ pins: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    console.log(this.state.pins);
    return (
      <div>
        <input
          name="inputText" value={this.state.inputText} onChange={this.onTextChange}/>
         <LoadPins pins={this.state.pins} /> 
      </div>
    );
  }
}

export default SearchBar;
