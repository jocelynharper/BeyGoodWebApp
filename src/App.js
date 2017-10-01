import React, { Component } from 'react';
import './App.css';
import Gifs from './Gifs.js';
import GifList from './GifList.js';
import SearchBar from './SearchBar.js';
import request from 'superagent';

class App extends Component {
  constructor(){
    super();

    this.state = {
      gifs: []
    }
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=beyonce+${term}&api_key=uTm7il4oTA1SjAp12nAouLLKMstq6ldV`;
    request.get(url, function(err, res) {
      console.log(res.body.data[0]);
    });
/*  constructor(){
    super();
    this.state = {
      searchFilter: "",
      gifs: []
    }*/
  }

  render() {
    return (
      <div className="App">
        <Gifs />
      <SearchBar onTermChange={this.handleTermChange} />
      <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
