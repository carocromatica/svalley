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
    pins: [],
    open: false,
    currentImg: ''
  };

  componentDidMount() {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=watercolor&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
      .then(res => this.setState({ pins: res.data.hits }))
      .catch(err => console.log(err));
  }

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };
  

  changeW() {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=watercolors&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
      .then(res => this.setState({ pins: res.data.hits }))
      .catch(err => console.log(err));
  }

  changecats() {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=cats&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
      .then(res => this.setState({ pins: res.data.hits }))
      .catch(err => console.log(err));
  }

  changedogs() {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=dogs&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
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
    let { pins } = this.state;
    return (
      <div>
        <input
          name="inputText" value={this.state.inputText} onChange={this.onTextChange} />

        <div>
          <button onClick={this.changeW.bind(this)}>inicio</button>
          <button onClick={this.changecats.bind(this)}>gatos</button>
          <button onClick={this.changedogs.bind(this)}>perros</button>
          <div className="row">
            {pins.map(pin => (
              <div className="column">
                <img src={pin.webformatURL} />
              </div>
            ))}
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
