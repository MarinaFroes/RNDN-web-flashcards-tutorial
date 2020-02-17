import React, { Component } from 'react'
import { connect } from 'react-redux'


class Deck extends Component {
  render() {
    const deck_id = this.props.match.params.deck_id
    const deck = this.props.decks[deck_id]

    if (!deck) {
      return <p>Not found</p>
    }

    return (
      <div style={{border: '2px solid green'}}>
        <p>{deck.title}</p>
        <p>{deck.questions.length} cards </p>
        <button onCLick={this.handleAddCard}>Add card</button>
        <button onClick={this.handleStartQuiz}>Start quiz</button>
      </div>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Deck)
