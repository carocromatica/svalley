import React, { Component } from 'react';


class Exp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pins: [],
      load: false
    }
  }

    componentDidMount() {

      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(resp => resp.json())
        .then(json => {
          this.setState({
            load: true,
            pins: json
          })
        })
    }
 

  render() {
    let { pins } = this.state;

    return (
      <div>
       <ul>{pins.map(pin =>(
         <li key={pin.id}>
         {pin.title}></li>
       ))}</ul>
      </div>
    );
  }
}

export default Exp;
