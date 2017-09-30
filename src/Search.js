import React, { Component } from 'react';
import {FormControl, FormGroup} from 'react-boostrap';
import ReactDOM from 'react-dom';

class Search extends Component{

  componentDidMount() {

    const formInstance = (
      <form>
        <FormGroup bsSize="large">
          <FormControl type="text" placeholder="Large text" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Normal text" />
        </FormGroup>
        <FormGroup bsSize="small">
          <FormControl type="text" placeholder="Small text" />
        </FormGroup>
      </form>
    );

    ReactDOM.render(formInstance, mountNode);

  }

render() {

  return(
    <formInstance></formInstance>
  )
  }
}

export default Search;
