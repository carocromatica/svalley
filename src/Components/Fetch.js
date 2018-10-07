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
      <div className ="row">
       {pins.map(pin =>( 
         <div className="column">
         <img src={pin.thumbnailUrl}/>
         <p>{pin.title}</p>
         <button>pin it!</button>
         </div>
       ))}
      </div>

    );
  }
}

export default Exp;
