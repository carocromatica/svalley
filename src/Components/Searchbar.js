import React, { Component } from 'react';
import axios from 'axios'
import LoadPins from './Pins'


class SearchBar extends Component {
  
  state = {
    searchText: '',
    amount:20,
    apiUrl:'https://pixabay.com/api/',
    apiKey:'1721901-fa9bcc6ed3f879da0567a53bb',
    pins:[]
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=star&image_type=photo&per_page=${this.state.amount}&safesearch=true`
        )
        .then(res => this.setState({ pins: res.data.hits }))
        .catch(err => console.log(err));
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
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
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
        />

        {this.state.pins.length > 0 ? ( <LoadPins pins={this.state.pins} /> ) : null}
      </div>
    );
  }

}

export default SearchBar;
