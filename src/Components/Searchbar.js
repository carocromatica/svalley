import React, { Component } from 'react';
import axios from 'axios'


class SearchBar extends Component {
  

state ={
  inputText:'',
  amount:20,
  apiUrl:'https://pixabay.com/api/',
  apiKey:'1721901-fa9bcc6ed3f879da0567a53bb',
  pins:[]
};

onTextChange = e =>{
  this.setState({[e.target.name]:e.target.value},()=>
{
  axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.inputText}&image_type=photo&per_page=${this.state.amount}$safesearch=true`)
  .then(resp=>this.setState({pins:resp.data.hits}))
  .catch(err=> console.log('err'))

});
};

  render() {
    console.log(this.state.pins)
    return (
      
      <div>
        
        <input name="inputText" value={this.state.inputText} 
        onChange={this.onTextChange} 
        
        type="text" placeholder="Búsqueda.."/>
      
      </div>
    );
  }
}

export default SearchBar;
