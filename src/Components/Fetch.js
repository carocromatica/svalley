import React, { Component } from 'react';


class Exp extends Component {

constructor(props){
  super(props);
  this.state={
    pins:[],
    load:false
  }

  componentDidMount() ;{

    fetch('https://api.thecatapi.com/v1/images/search')
  }
}

  render() {
    return (
      <div>
        holi soy un componente jajaja
      </div>
    );
  }
}

export default Exp;
