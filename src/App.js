import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          lunch
          <Table/>
        </div>
      </div>
    );
  }
}

export default App;
