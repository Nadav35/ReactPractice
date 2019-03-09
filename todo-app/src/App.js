import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Todos from './components/Todos';
import Addtodo from './components/AddTodo';
import Header from './components/layouts/Header';
import About from './components/pages/About';

// import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todos: [
      
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data })
      );
  }

  // Toggle Complete
  toggleComplete = (id) => {
    this.setState( {
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete todo
  delTodo = (id) => {
    
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => {
          return todo.id !== id;
        })]
      })) 
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false

    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    
    
  }

  render() {
    const { todos } = this.state; 
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Addtodo addTodo={this.addTodo} />
                <Todos todos={todos}
                  toggleComplete={this.toggleComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About}
            
            />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
