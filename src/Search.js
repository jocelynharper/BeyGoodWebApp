import React, { Component } from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import autoBind from 'react-autobind';
import ReactDOM from 'react-dom';
import Gifs from './Gifs.js';

var search_criteria = {};

class Search extends Component{

  constructor(props){
    super(props)
    this.state = {value: ''};
    autoBind(this);
  }

  handleSetValue(event){
    this.setState({
      value: event.target.value
    //}, () => {
      //if(this.props.onChange){
        //this.props.onChange(this.state.value);
    //  }
    });
  }

  makeupafunction(){
    //const search_criteria = value.trim();
  }

  render() {
     return (
       <div>
       <form>
         <FormGroup
           controlId="formBasicText">
           <ControlLabel>Working example with validation</ControlLabel>
           <FormControl
             type="text"
             value={this.state.value}
             onChange={this.handleSetValue}
             placeholder="Enter text"
             onKeyUp={this.makeupafunction}
           />
           <FormControl.Feedback />
         </FormGroup>
       </form>
       </div>
     );
   }
 }

 ReactDOM.render(<Search />, document.getElementById('root'));

export default Search;
