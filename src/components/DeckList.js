import React, { Component } from 'react'
import { connect } from 'react-redux'

class DeckList extends Component {

  render() {
    const { decks, deckIds } = this.props
    console.log('----DECK LIST----')
    console.log(decks)
    console.log(deckIds)

    return (
      <div>
        {
          deckIds.map(deck_id => (
            <p key={deck_id}>{decks[deck_id].title}</p>
          ))
        }
      </div>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    deckIds: Object.keys(decks)
  }
}

export default connect(mapStateToProps)(DeckList)