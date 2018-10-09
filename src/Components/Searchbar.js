import React, { Component } from 'react';
import axios from 'axios'
import LoadPins from './Pins'
import Cats from './Cats'
import Watercolors from './Watercolors'
import Design from './Design';
import Art from './Art'

class SearchBar extends Component {

  state = {
    inputText: '',
    amount: 200,
    apiUrl: 'https://pixabay.com/api/',
    apiKey: '1721901-fa9bcc6ed3f879da0567a53bb',
    pins: []
  };

  componentDidMount() {
    axios
    .get(
      `${this.state.apiUrl}/?key=${this.state.apiKey}&q=watercolor&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
    .then(res => this.setState({ pins: res.data.hits }))
    .catch(err => console.log(err));
  }

  onTextChange = e => {
    const input = e.target.value;
    this.setState({ [e.target.name]: input }, () => {
      if (input === '') {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=watercolor&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
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
          name="inputText" value={this.state.inputText} onChange={this.onTextChange} />

            <Watercolors />
            <Design />
            <Art />
        <LoadPins pins={this.state.pins} />
        
      </div>
    );
  }
}

export default SearchBar;
