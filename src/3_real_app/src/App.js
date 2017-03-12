import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {apps} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {Object.keys(apps).map(path => <li key={path}><a href={path}>{path}</a></li>)}
        </ul>
      </div>
    );
  }
}

export default App;
