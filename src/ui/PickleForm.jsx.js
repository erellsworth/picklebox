import React from 'react';
import axios from 'axios';
import reduxComponent from '../components/reduxComponent';
import {setPublicationPayload} from '../actions';
import * as app_vars from '../app_vars.js';

const api_options = {
        headers: {
          'Authorization': 'Bearer ' + app_vars.api_key,
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
        }
      };

class PickleForm extends reduxComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://medium.com/pickle-fork',
      errors:[]
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
    var that = this;

    axios.get(app_vars.api_url + this.state.url.replace(/\//g, '^^'), api_options)
          .then(function (response) {
          // console.log('response', response);
            store.dispatch(setPublicationPayload(response.data.payload));
          })
          .catch(function (error) {
            console.log('error', error);
            var errors = that.state.errors;
            errors.push(error);
            var newState = Object.assign(that.state, {errors: errors});
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
              <button className="button is-primary">Pickle My Publication</button>          
            </form>    
  }
}

export default PickleForm;