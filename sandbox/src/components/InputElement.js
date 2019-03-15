import React, { Component } from 'react'

export class InputElement extends Component {

  state = {
    content: ''
  }

  updateText = (e) => {
    this.setState({ [e.target.name ]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createCard(this.state.content)
    this.setState({ content: '' });
  }
    
  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-el">
        <input 
          name="content" 
          type="text" 
          onChange={this.updateText}
          value={this.state.content}
        /> 
        <input 
          className="form-submit-button"
          type="submit" 
          text="submit" 
        />
      </form>
    )
  }
}

export default InputElement
