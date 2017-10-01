import React, { Component } from 'react';
import './App.css';
import GifList from './GifList.js';
import SearchBar from './SearchBar.js';
import request from 'superagent';

class App extends Component {
  constructor(){
    super();

    this.state = {
      gifs: []
    }

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=beyonce+${term}&api_key=uTm7il4oTA1SjAp12nAouLLKMstq6ldV&limit=10`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  render() {
    return (
      <div className="App">
      <SearchBar onTermChange={term => this.handleTermChange(term)} />
      <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
