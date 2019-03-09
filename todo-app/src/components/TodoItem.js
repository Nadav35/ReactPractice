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
    const { todo, toggleComplete } = this.props;
    return (
      <div style = {this.getStyle()}>
        <p>
          <input type="checkbox" onChange={toggleComplete} />{' '}
          { todo.title }
        </p>
      </div>
    )
  }
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
