import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
      inputArray: [
        'Color',
        'Shape',
        'Height',
        'Weight' 
       ]
    }

  }

  handleChange(filter){
    this.setState({userInput: filter})
  }

  render() {
   let filterArr = this.state.inputArray.filter((e) => {
     return e.includes(this.state.userInput)
   }).map((e) => {
     return <h2>{e}</h2>
   })
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}></input>
        <h2>{filterArr}</h2>
      </div>
    );
  }
}

export default App;
