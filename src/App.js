import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {url: 'https://medium.com/pickle-fork'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({url: e.target.value});
  }

  handleSubmit(){

  }

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <header className="App-header">
              <h1 className="App-title">Welcome to Pickle Box</h1>
            </header>
            <form>
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
              <button className="button is-primary">Do the thing.</button>          
            </form>   
          </div>   
        </section>  
      </div>
    );
  }
}

export default App;
