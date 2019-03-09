import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {

  toggleComplete = (e) => {
    console.log('hey');
    
  }
  
  render() {
    const { todos } = this.props;
    
    return todos.map(todo => (
      <TodoItem 
      key={todo.id} 
      todo={todo} 
      toggleComplete={this.toggleComplete}  />
    ))
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
