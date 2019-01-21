import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      colorArray: [
        'Red',
        'Blue',
        'Green',
        'Black'
      ]
    }

  }

  render() {
    let colorDisplay = this.state.colorArray.map((e) => <h2>{e}</h2>)
    
    return (
      <div className="App">
        <h1>{colorDisplay}</h1>
      </div>
    );
  }
}

export default App;
