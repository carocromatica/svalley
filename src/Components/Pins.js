import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadPins extends Component {

  render() {
    let imageListContent;
    const { pins } = this.props;
    console.log(pins)

    if (pins) {
      imageListContent = (
        <div>
          {pins.map(img => (
            <div>
              <img src={img.largeImageURL} alt="" />
              carga
            </div>
          ))}
        </div>
      )
    } else {
      imageListContent = null;

    } return (
      <div>
        {imageListContent}
      </div>
    )
  }
}

LoadPins.propTypes = {
  pins: PropTypes.array.isRequired
};

export default LoadPins;
