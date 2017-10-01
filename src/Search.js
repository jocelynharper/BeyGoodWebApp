import React, { Component } from 'react';
import {ControlLabel, FormControl, FormGroup, mountNode} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Gifs from './Gifs.js';


class Search extends Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  handleSetValue(value){
    this.setState({
      value: value.target.innerText
    }, () => {
      if(this.props.onChange){
        this.props.onChange(this.state.value);
      }
    });
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
             value={this.props.search_criteria}
             placeholder="Enter text"
             onChange={this.state.value}
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
