import React, { Component } from 'react';
import './App.css';

import Gifs from './Gifs.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Gifs></Gifs>
      </div>
    );
  }
}

export default App;
