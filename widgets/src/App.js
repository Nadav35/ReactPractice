import React, { Component } from 'react';
import 'reset-css';
import './App.css';

import Clock from './components/Clock';
import Tabs from './components/Tabs';
import Weather from './components/Weather';

const tabsInfo = [
  {
    title: "one",
    content: "I am the first"
  },
  {
    title: "two",
    content: "Second pane here"
  },
  {
    title: "three",
    content: "Third pane here"
  }
]

class App extends Component {
  render() {
    return (
      <div style={wrapperStyle}>
        <Clock />
        <Weather />
        <Tabs tabsInfo={tabsInfo}/>
      </div>
    );
  }
}

const wrapperStyle = {
  margin: '20px 20px 20px 120px',
  padding: '30px'
  
}

export default App;
