import React from 'react'
import { Link } from 'react-router-dom'

function DeckPreview({ decks, deck_id }) {
  return (
    <Link to={`/deck/${deck_id}`} >
      <div style={{ border: '2px solid red' }}>
        <p>{decks[deck_id].title}</p>
        <p>{decks[deck_id].questions ? decks[deck_id].questions.length : 0} cards</p>
      </div>
    </Link>
  )
}

export default DeckPreview
