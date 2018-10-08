import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadPins extends Component {

  render() {
    let imageListContent;
    const { pins } = this.props;

    if (pins) {
      imageListContent = (
        <div className="row">
          {pins.map(img => (
            <div className="column">
              <a href="#popup" class="popup-link"> <img src={img.webformatURL} alt="" />
              </a><p>{img.tags}</p>
            </div>

          ))}
        </div>
      );
    } else {
      imageListContent = null;
    }
    return (
      <div>
        <div>
          {imageListContent}
        </div>
        <div class="modal-wrapper" id="popup">
          <div class="popup-contenedor">
            <h2>Titulo de la Modal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor deleniti...</p>
            <a class="popup-cerrar" href="#">X</a>
          </div>
        </div>
      </div>
    );
  }
}

LoadPins.propTypes = {
  pins: PropTypes.array.isRequired
};

export default LoadPins;
