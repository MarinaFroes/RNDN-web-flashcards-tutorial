import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Card from './Card'

class Quiz extends Component {
  state = {
    index: 0,
    correctAnswers: 0,
    toDeck: false
  }

  handleClick = (e) => {
    e.preventDefault()

    const deck_id = this.props.match.params.deck_id
    const deck = this.props.decks[deck_id]
    const lastIndex = deck.questions.length

    const answer = e.target.value  

    if (answer === deck.questions[this.state.index].answer.toString()) {
      this.setState(prevState => {
        return {
          index: prevState.index < lastIndex ? prevState.index + 1 : prevState.index,
          correctAnswers: prevState.correctAnswers + 1
        }
      })
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index < lastIndex ? prevState.index + 1 : prevState.index,
          correctAnswers: prevState.correctAnswers
        }
      })
    }

  }

  handleBackToDeck = e => {
    e.preventDefault()

    this.setState({
      toDeck: true
    })
  }

  render() {
    const deck_id = this.props.match.params.deck_id
    const deck = this.props.decks[deck_id]

    if (this.state.toDeck === true) {
      return <Redirect to={`/deck/${deck_id}`} />
    }

    return (
      <div>
        {
          deck.questions[this.state.index]
            ? (
              <div>
                <p>Correct answers: {this.state.correctAnswers}</p>
                <Card
                  index={this.state.index}
                  deck={deck}
                  card={deck.questions[this.state.index]}
                />
                
                <button value='true' onClick={this.handleClick}>True</button>
                <button value='false' onClick={this.handleClick}>False</button>
              </div>
            ) : (
              <div>
                <p>You finished the quiz</p>
                <p>You got {this.state.correctAnswers / deck.questions.length * 100}% of correct answers</p>
                <button onClick={this.handleBackToDeck}>Back to deck</button>
              </div>
            )
        }
      </div>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz)
