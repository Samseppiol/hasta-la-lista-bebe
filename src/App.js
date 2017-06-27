import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Checkbox from './components/Checkbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hasta la lista bebe</h2>
        </div>
        <Checkbox label='label!' checked={ true } />
      </div>
    );
  }
}

export default App;
