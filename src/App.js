import React, { Component } from 'react';
import './App.css';
import Gifs from './Gifs.js';
import Search from './Search.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Search></Search>
        <Gifs></Gifs>
      </div>
    );
  }
}

export default App;
