import React, { Component } from 'react';
import './App.css';
import Picture from './Picture'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Picture img={'https://http.cat/409'}/>
      </div>
    );
  }
}

export default App;
