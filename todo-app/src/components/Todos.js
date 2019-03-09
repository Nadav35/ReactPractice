import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {

  
  render() {
    const { todos, toggleComplete, delTodo } = this.props;
    
    return todos.map(todo => (
      <TodoItem 
      key={todo.id} 
      todo={todo} 
      toggleComplete={toggleComplete}
      delTodo={delTodo}  />
    ))
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired

}

export default Todos;
