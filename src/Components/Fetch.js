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

      fetch('')
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
         <img src={pin.webformatURL}/>
         <button>pin it!</button>
         </div>
       ))}
      </div>

    );
  }
}

export default Exp;
