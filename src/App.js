import React, { Component } from 'react';
import './App.css';

import Gifs from './Gifs.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Gifs searchWord="funny"></Gifs>
      </div>
    );
  }
}

export default App;
