import React, { Component } from 'react';
import axios from 'axios'
import LoadPins from './Pins'


class SearchBar extends Component {
  
  state = {
    searchText: '',
    amount:20,
    apiUrl:'https://pixabay.com/api/',
    apiKey:'1721901-fa9bcc6ed3f879da0567a53bb',
    images:[]
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => this.setState({ amount: value });

  render() {
    console.log(this.state.images);
    return (
      <div>
        <input
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
    
        />

        {this.state.images.length > 0 ? (
          <LoadPins images={this.state.images} />
        ) : null}
      </div>
    );
  }

}

export default SearchBar;
