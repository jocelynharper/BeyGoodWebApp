import React, { Component } from 'react';
import Search from './Search.js';

const base_URL = 'http://api.giphy.com/v1/gifs/'
const base_search = 'search?q=beyonce+'
const search_criteria = Search.value
const api_key = '&api_key=uTm7il4oTA1SjAp12nAouLLKMstq6ldV'
const search_limit = '&limit=10'

const giphyURL = search => base_URL.concat(base_search, search_criteria, api_key, search_limit);

console.log(giphyURL());

class Gifs extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

componentDidMount(){
    fetch(giphyURL(this.props.gifs))
      .then(data => data.json())
      .then(data => {
        var gifs = data.data.map((gifs, i) => {return gifs.images})
        console.log(data);
        this.setState({
          gifs
        })
      })
      .catch(err => console.error(this.props.url, err.toString()))
}

render() {
    return(
      <div>
        <h1>Let Me Upgrade You</h1>
      </div>
)}
}


export default Gifs;
