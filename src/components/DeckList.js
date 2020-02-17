import React from 'react'

import DeckPreview from './DeckPreview'

function DeckList({ decks }) {
  
  const decksIds = decks ? Object.keys(decks) : null
  
  console.log('----DECK LIST----')
  console.log(decks)
  console.log(decksIds)

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


export default DeckList