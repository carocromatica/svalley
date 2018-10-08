import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadPins extends Component {


  state = {
    open: false,
    currentImg: ''
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    let imageListContent;
    const { pins } = this.props;

    if (pins) {
      imageListContent = (
        <div className="row">
          {pins.map(img => (
            <div className="column">
              <a href="#popup" class="popup-link" onClick={() => this.handleOpen(img.webformatURL)} > <img src={img.webformatURL} alt="" />
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
          <img src={this.state.currentImg} alt="" style={{ width: '50%' }} />
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
