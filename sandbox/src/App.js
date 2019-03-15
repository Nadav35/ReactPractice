import React, { Component } from 'react';
import './App.css';

import InputElement from './components/InputElement';
import CardHolder from './components/CardHolder';
// import Card from './components/Card';

import uuid from 'uuid';

class App extends Component {

  state = {
    cards: []
  }

  createCard = (content) => {
    this.setState( {
      cards: [...this.state.cards, {
        col: 1,
        content,
        id: uuid.v4()
      }]
    })
  }

  editCardColumn = (id, col) => {
    this.setState( {
      cards: this.state.cards.map(card => {
        if (card.id === id) {
          card.col = col;
        }
        return card;
      })
    })
  }

  render() {
    const { cards } = this.state; 
    
    return (
      <div className="app-container">
        <div className="left-pane">
          <InputElement createCard={this.createCard}/>
          <CardHolder col= {1} cards={cards} editCardColumn={this.editCardColumn}/>

        </div>
        <div className="right-pane">
          <CardHolder col={2} cards={cards} editCardColumn={this.editCardColumn}/>
          <CardHolder col={3} cards={cards} editCardColumn={this.editCardColumn}/>

        </div>
      </div>
    );
  }
}

export default App;
