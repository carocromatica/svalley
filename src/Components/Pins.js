import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LoadPins extends Component {
  
  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <div>
          {images.map(img => (
            <div>
           
              <img src={img.largeImageURL} alt="" />
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
  images: PropTypes.array.isRequired
};

export default LoadPins;
