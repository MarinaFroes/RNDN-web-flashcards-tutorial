import React, { Component } from 'react'

class Card extends Component {
  state = {
    flipCard: false
  }

  handleClick = e => {
    e.preventDefault()

    this.setState(prevState => ({
      flipCard: !prevState.flipCard
    }))
  }
  render() {
    const { flipCard } = this.state
    const { card, index, deck } = this.props

    return (
      <div style={{ border: '2px solid orange', margin: '20px' }}>
        {
          !flipCard
            ? <p>Question: {card.question}</p>
            : <p>Answer: {typeof card.answer === 'boolean' ? card.answer.toString() : card.answer}</p>
        }
        <p>{index + 1} of {deck.questions.length}</p>
        <button type='submit' onClick={this.handleClick}>Flip card</button>
      </div>
    )
  }
}

export default Card