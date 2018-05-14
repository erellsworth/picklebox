import React from 'react';
import axios from 'axios';
import reduxComponent from '../components/reduxComponent';
import {setPublicationPayload} from '../actions';
import * as app_vars from '../app_vars.js';

var api_url = app_vars.api_url;
var api_key = app_vars.api_key;

if(process.env.NODE_ENV === "development"){
  api_url = app_vars.local_api_url;
  api_key = app_vars.local_api_key;  
}

const api_options = {
        headers: {
          'Authorization': 'Bearer ' + api_key,
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
        }
      };

class PickleForm extends reduxComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://medium.com/pickle-fork',
      errors:[],
      buttonClass: 'button is-primary is-rounded'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({url: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const { store } = this.context;
    var newState = Object.assign(this.state, {buttonClass: 'button is-primary is-rounded is-loading'});
    this.setState(newState);
    var that = this;

    axios.get(api_url + this.state.url.replace(/\//g, '^^'), api_options)
          .then(function (response) {
           console.log('response', response);
            store.dispatch(setPublicationPayload(response.data.payload));
            newState = Object.assign(that.state, {buttonClass: 'button is-primary is-rounded'});
            that.setState(newState);             
          })
          .catch(function (error) {
            console.log('error', error);
            var errors = that.state.errors;
            errors.push(error);
            newState = Object.assign(that.state, {errors: errors, buttonClass: 'button is-primary is-rounded'});
            that.setState(newState);           
          });
  }

  render(){ 
    return <form onSubmit={this.handleSubmit}>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Medium URL:</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input 
                        value={this.state.url}
                        onChange={this.handleChange}
                        className="input"
                        type="text"
                        placeholder="https://medium.com/pickle-fork" 
                         />
                    </p>
                  </div>
                </div>
              </div>    
              <button className={this.state.buttonClass}>Pickle My Publication</button>          
            </form>    
  }
}

export default PickleForm;