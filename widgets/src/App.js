import React, { Component } from 'react';
import 'reset-css';
import './App.css';

import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div style={wrapperStyle}>
        <Clock />
      </div>
    );
  }
}

const wrapperStyle = {
  margin: '20px 20px 20px 120px',
  padding: '30px'
  
}

export default App;
