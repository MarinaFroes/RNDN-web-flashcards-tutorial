import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import Card from './Card'

class Deck extends Component {

  render() {
    const { decks } = this.props
    const deck_id = this.props.match.params.deck_id
    const deck = decks[deck_id]
    
    console.log('---DECK COMPONENT---')

    if (!deck) {
      return <p>Not found</p>
    }

    return (
      <div style={{border: '2px solid green'}}>
        <p>{deck.title}</p>
        <p>{deck.questions.length} cards </p>
        <Link to={{
          pathname: "/newcard",
          state: {
            deck_id: deck_id
          }
        }}>Add card</Link>
        
        <Link to={`/quiz/${deck_id}`}>Start quiz</Link>
        
        {
          deck.questions.length === 0 
            ? <p>You don't have any cards yet</p>
            : deck.questions.map((card, index) => (
              <Card
                key={index}
                card={card}
                deck={deck}
                index={index}
              />
            ))
        }
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
