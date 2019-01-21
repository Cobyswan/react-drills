import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: ''
    }
  } 
  
  updateUserInput(val){
    this.setState({userInput: val})
  }
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.updateUserInput(e.target.value)}></input>
        <h2>{this.state.userInput}</h2>
      </div>
    );
  }
}

export default App;
