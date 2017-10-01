import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(){
    super();
    this.state={ value: '' }
  }

  onInputChange(value){
    this.setState({value});
    this.props.onTermChange(value);
  }

  render(){
    return(
      <div className = "search-bar">
        <input placeholder="Search for your favorite Beyoncé .gifs!" onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
