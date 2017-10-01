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
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}+beyonce&api_key=uTm7il4oTA1SjAp12nAouLLKMstq6ldV&limit=10`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>don't bore me - just show me</h1>
        <p><b>A BEYONCEIFIED GIPHY SEARCH.</b></p>
        <br></br>
      <SearchBar onTermChange={term => this.handleTermChange(term)} />
      <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
