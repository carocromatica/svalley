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
              <img src={img.webformatURL} alt="" />
              <p>{img.tags}</p>
            </div>
           
          ))}
        </div>
      );
    } else {
      imageListContent = null;
    }
    return (
      <div>
        {imageListContent}
      </div>
    );
  }
}

LoadPins.propTypes = {
  pins: PropTypes.array.isRequired
};

export default LoadPins;
