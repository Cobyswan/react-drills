import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      taskList: [],
      input: ''
    }

    this.addToTasks = this.addToTasks.bind(this)
    this.clearTasks = this.clearTasks.bind(this)
  }

  handleInputChange(val){
    this.setState({input: val})
  }

  addToTasks(){
    this.setState({taskList: [...this.state.taskList, this.state.input], input: ''})
  }

  clearTasks(){
    this.setState({taskList: []})
  }
  
  render() {
    return (
      <div className="App">
        <h1>My todo list: </h1>
        <input value={this.state.input} onChange={(e) => this.handleInputChange(e.target.value)}></input>
        <button onClick={this.addToTasks}>Add</button>
        <button onClick={this.clearTasks}>Clear</button>
        <Todo list={this.state.taskList}/>
      </div>
    );
  }
}

export default App;
