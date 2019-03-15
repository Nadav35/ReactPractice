import React, { Component } from 'react'

export class Card extends Component {

  goLeft = e => {
    this.props.editCardColumn(this.props.id, this.props.col - 1);
  }

  goRight = e => {
    this.props.editCardColumn(this.props.id, this.props.col + 1);
  }

  render() {

    const { content, col } = this.props;
    return (
      <div className="card">
        <span>{content}</span>
        <div className="buttons">
          <input 
            disabled={col === 1 ? 'disabled' : ''} 
            type="submit" value="<"
            onClick={this.goLeft}
          />
          <input 
            disabled={col === 3 ? 'disabled' : ''} 
            type="submit" value=">"
            onClick={this.goRight}
          />
        </div>
      </div>
    )
  }
}

export default Card
