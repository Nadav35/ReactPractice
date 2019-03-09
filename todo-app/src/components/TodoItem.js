import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    // return this.props.todo.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { todo, toggleComplete, delTodo } = this.props;
    return (
      <div style = {this.getStyle()}>
        <p>
          <input type="checkbox" onChange={toggleComplete.bind(this, todo.id)} />{' '}
          { todo.title }
          <button onClick={delTodo.bind(this, todo.id)} style={btnStyle} >x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired

}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  float: 'right',
  borderRadius: '50%',
  cursor: 'pointer'
}



export default TodoItem;
