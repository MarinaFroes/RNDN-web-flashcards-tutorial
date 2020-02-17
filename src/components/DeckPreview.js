import React from 'react'

function DeckPreview({ decks, deck_id }) {
  return (
    <div style={{ border: '2px solid red' }}>
      <p>{decks[deck_id].title}</p>
      <p>{decks[deck_id].questions ? decks[deck_id].questions.length : 0} cards</p>
    </div>
  )
}

export default DeckPreview
