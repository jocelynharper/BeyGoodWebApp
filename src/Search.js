import React, { Component } from 'react';
import {ControlLabel, FormControl, FormGroup, HelpBlock, mountNode} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Gifs from './Gifs.js';


class Search extends Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
     return (
       <form>
         <FormGroup
           controlId="formBasicText">
           <ControlLabel>Working example with validation</ControlLabel>
           <FormControl
             type="text"
             value={this.state.value}
             placeholder="Enter text"
             onChange={this.handleChange}
           />
           <FormControl.Feedback />
           <HelpBlock>Validation is based on string length.</HelpBlock>
         </FormGroup>
       </form>
     );
   }
 }

 ReactDOM.render(<Search />, document.getElementById('root'));

export default Search;
