import React, { Component } from 'react';
import axios from 'axios'

class Buttons extends Component {

  state = {
    inputText: '',
    amount: 100,
    apiUrl: 'https://pixabay.com/api/',
    apiKey: '1721901-fa9bcc6ed3f879da0567a53bb',
    pins: [],
    open: false,
    currentImg: ''
  };


  handleOpen = pin => {
    this.setState({ open: true, currentImg: pin });
  };

  changeW() {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=watercolors&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
      .then(res => this.setState({ pins: res.data.hits }))
      .catch(err => console.log(err));
  }

  changedesign() {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=creative&orientation=vertical&image_type=photon&per_page=${this.state.amount}&order=popular&safesearch=true`)
      .then(res => this.setState({ pins: res.data.hits }))
      .catch(err => console.log(err));
  }

  changearch() {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=architecture&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
      .then(res => this.setState({ pins: res.data.hits }))
      .catch(err => console.log(err));

  }



  render() {
    console.log(this.state.pins);
    let { pins } = this.state;
    return (
      <div>
       
     
          <button onClick={this.changeW.bind(this)}>a</button>
          <button onClick={this.changedesign.bind(this)}>s</button>
          <button onClick={this.changearch.bind(this)}>d</button>



          <div>
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

export default Buttons;
