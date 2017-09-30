import React, { Component } from 'react';
import './App.css';
import Gifs from './Gifs.js';
import Search from './Search.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Gifs></Gifs>
      <Search></Search>
      </div>
    );
  }
}

export default App;
