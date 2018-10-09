import React, { Component } from 'react';
import axios from 'axios'


class Art extends Component {

  constructor(){
    super();
    this.state = {
    inputText: '',
    amount: 150,
    apiUrl: 'https://pixabay.com/api/',
    apiKey: '1721901-fa9bcc6ed3f879da0567a53bb',
    pins: []
  };

};

changeGallery(){
  axios
    .get(
      `${this.state.apiUrl}/?key=${this.state.apiKey}&q=Art&orientation=vertical&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
    .then(res => this.setState({ pins: res.data.hits }))
    .catch(err => console.log(err));

}


 render(){
  let { pins } = this.state;

  return (
    <div>
      <button onClick={this.changeGallery.bind(this)}>Art</button>
    <div className ="row">
     {pins.map(pin =>( 
       <div className="column">
       <img src={pin.webformatURL}/>
       </div>
     ))}
    </div>
    </div>

  );
  }
  
}

export default Art;
