import React, { Component } from 'react';
import Card from './Card';

export class CardHolder extends Component {
  render() {
    const { cards, col, editCardColumn } = this.props;

    return (
      <div className="card-holder">
        {cards.map( card => {
          if (card.col === col) {
            return <Card 
              key={card.id}
              className="card"
              content={card.content} 
              id={card.id} 
              col={col}
              editCardColumn={editCardColumn}
            />
          } else {
            return '';
          }
        })}
      </div>
    )
  }
}

export default CardHolder;
