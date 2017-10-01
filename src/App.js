import React, { Component } from 'react';
import './App.css';
import GifList from './GifList.js';
import SearchBar from './SearchBar.js';
import Footer from './Footer.js';
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
    const url = `http://api.giphy.com/v1/gifs/search?q=beyonce+${term}+beyonce&api_key=uTm7il4oTA1SjAp12nAouLLKMstq6ldV&limit=10`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>don't bore me - just show me</h1>
        <p><b>a Beyoncéfied giphy search.</b></p>
        <br></br>
      <SearchBar onTermChange={term => this.handleTermChange(term)} />
      <GifList gifs={this.state.gifs} />
      <Footer />
      </div>
    );
  }
}

export default App;
