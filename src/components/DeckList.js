import React from 'react'
import { connect } from 'react-redux'

import DeckPreview from './DeckPreview'

function DeckList({ decks }) {
  
  const decksIds = decks ? Object.keys(decks) : null
  
  return (
    <div>
      <p>DECK LIST</p>
      {
        decksIds !== null
          ? decksIds.map(deck_id => (
            <DeckPreview key={deck_id} deck_id={deck_id} decks={decks}/>
          ))
          : <p>You don't have any deck yet</p>
      }
    </div>
  )
  
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)