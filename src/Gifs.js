import React, { Component } from 'react';

const giphyURL = search =>
  'http://api.giphy.com/v1/gifs/search?q=funny+beyonce&api_key=uTm7il4oTA1SjAp12nAouLLKMstq6ldV&limit=10'

class Gifs extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

componentDidMount(){
    fetch(giphyURL(this.props.searchWord))
      .then(data => data.json())
      .then(data => {
        this.setState({
          gifs: data
        })
      })
}

  render() {
    return(
      <div>
        <h1>Bey Good GIF Search</h1>
        <ul>
          {this.props.gifs.map(function(listGifs){
            return <li>{listGifs}</li>;
          })}
        </ul>
      )
    }
        <p className="App-intro">
        </p>
      </div>

    )
  }

export Gifs;
