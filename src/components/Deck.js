import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Deck extends Component {
  handleAddCard = (e) => {
    e.preventDefault()
    
  }

  handleStartQuiz = (e) => {
    e.preventDefault()

  }
  
  render() {
    const deck_id = this.props.match.params.deck_id
    const deck = this.props.decks[deck_id]
    console.log('---DECK COMPONENT---')
    console.log(this.props.decks[deck_id])
    if (!deck) {
      return <p>Not found</p>
    }

    return (
      <div style={{border: '2px solid green'}}>
        <p>{deck.title}</p>
        <p>{deck.questions.length} cards </p>
        {/* <Link to="/newcard">Add card</Link> */}
        <Link to={{
          pathname: "/newcard",
          state: {
            deck_id: deck_id
          }
        }}>Add card</Link>
        <button onClick={this.handleStartQuiz}>Start quiz</button>
      </div>
    )
  }
}

function mapStateToProps({ decks }) {
  console.log(decks)
  return {
    decks
  }
}

export default withRouter(connect(mapStateToProps)(Deck))
