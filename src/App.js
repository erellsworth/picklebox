import React from 'react';
import reduxComponent from './components/reduxComponent';
import './App.css';
import 'bulma/css/bulma.css'

import PickleForm from './ui/PickleForm.jsx';

class App extends reduxComponent {

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <header className="App-header">
              <h1 className="App-title">Welcome to Pickle Box</h1>
            </header>
            <PickleForm />   
          </div>   
        </section>  
      </div>
    );
  }
}

export default App;