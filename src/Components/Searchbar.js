import React, { Component } from 'react';
import axios from 'axios'
import Buttons from './Buttons'

class SearchBar extends Component {

  state = {
    inputText: '',
    amount: 100,
    apiUrl: 'https://pixabay.com/api/',
    apiKey: '1721901-fa9bcc6ed3f879da0567a53bb',
    pins: [],
    open: false,
    currentImg: ''
  };



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

  handleOpen = pin => {
    this.setState({ open: true, currentImg: pin });
  };

  render() {
    console.log(this.state.pins);
    let { pins } = this.state;
    return (
      <div>
        <input name="inputText" value={this.state.inputText} onChange={this.onTextChange} />
        <div>
          <Buttons />
          <div className="row">
            {pins.map(pin => (
              <div className="column">
              <a href="#popup" class="popup-link" onClick={() => this.handleOpen(pin.webformatURL)} >
                <img src={pin.webformatURL} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
        </div>

        <div class="modal-wrapper" id="popup">
          <div class="popup-contenedor">
          <img src={this.state.currentImg} alt="" style={{ width: '50%' }} />
            <a class="popup-cerrar" href="#">X</a>
          </div>
        </div>

      </div>
    );
  }
}

export default SearchBar;
