import React, { Component } from 'react';
import axios from 'axios'

class SearchBar extends Component {

  state = {
    inputText: '',
    amount: 30,
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



  handleOpen = pin => {
    this.setState({ open: true, currentImg: pin });
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

  render() {

    let { pins } = this.state;
    return (

      <div>
        <header>
          <a href="index.html"><i className="fab fa-pinterest logo"></i></a>
          <input name="inputText" value={this.state.inputText} onChange={this.onTextChange} placeholder="Buscar" />
          <span>Inicio</span>
          <span>Siguiendo</span>
          <span>Carolina</span>
          <span> <i className="fas fa-comment"></i></span>
          <span> <i className="fas fa-bell"></i></span>
          <span> <i className="fas fa-ellipsis-h"></i></span>
        </header>
        <div>

        </div>
        <div className="content">

          <div className="masonry">
            {pins.map(pin => (
              <div key={pin.id}>
                <div className="item">
                  <a href="#popup" className="popup-link" onClick={() => this.handleOpen(pin.webformatURL)} >
                    <img src={pin.webformatURL} alt={pin.user} />
                  </a>
                  <span className="lefty">
                    <a href="#popup" className="popup-link" onClick={() => this.handleOpen(pin.webformatURL)} >
                      {pin.user}
                    </a>
                  </span>
                  <span className="dots"><i className="fas fa-ellipsis-h"></i></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-wrapper" id="popup">
          <a className="popup-cerrar" href="#"><i className="fas fa-angle-left"></i> Volver</a>
          <div className="popup-contenedor">
            <img className="popimg" src={this.state.currentImg} alt="pinterest" />
            <div className="popright">
            
            <div>
            <button className="enviar">Enviar <i className="fas fa-upload"></i></button>
            <button className="guardar">Guardar</button>
            </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default SearchBar;