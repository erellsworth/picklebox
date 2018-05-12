import React from 'react';
import reduxComponent from './components/reduxComponent';
import PickledPublication from './publication/PickledPublication';
import PickleForm from './ui/PickleForm';
import './App.css';
import 'bulma/css/bulma.css'



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
            <PickledPublication />
          </div>   
        </section>  
      </div>
    );
  }
}

export default App;