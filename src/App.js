import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import 'bulma/css/bulma.css'

import * as app_vars from './app_vars.js';

const api_options = {
        headers: {
          'Authorization': 'Bearer ' + app_vars.api_key,
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
        }
      };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://medium.com/pickle-fork',
      errors:[],
      medium_payload:{}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({url: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();

    axios.get(app_vars.api_url + this.state.url.replace(/\//g, '^^'), api_options)
          .then(function (response) {
            console.log('response', response);
            this.state.medium_payload = response.data.payload;
/*            var newState = Object.assign(this.state, {
              medium_payload:response.data.payload
            });*/
            this.setState(this.state);
          })
          .catch(function (error) {
            console.log('error', error);
            this.state.errors.push(error);
            this.setState(this.state);           
          });
  }

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <header className="App-header">
              <h1 className="App-title">Welcome to Pickle Box</h1>
            </header>
            <form onSubmit={this.handleSubmit}>
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
          </div>   
        </section>  
      </div>
    );
  }
}

export default App;