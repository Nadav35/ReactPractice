import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Clean the gutters',
        completed: false
      },
      {
        id: 2,
        title: 'Go see a movie',
        completed: false
      },
      {
        id: 3,
        title: 'Get the car fixed',
        completed: false
      }
    ]
  }

  render() {
    const { todos } = this.state; 
    return (
      <div className="App">
        <Todos todos={todos}/>
      </div>
    );
  }
}

export default App;
