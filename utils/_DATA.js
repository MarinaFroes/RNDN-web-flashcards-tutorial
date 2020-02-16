let decks = {
  // "deck_id": {
  //   id: "deck_id",
  //   title: "Deck title",
  //   questions: [
  //     {
  //       question: "question Text",
  //       answer: "answer Text"
  //     }
  //   ]
  // }
}

// Generate random deck_id
function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Get all decks
export function _getDecks () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 1000)
  })
}

// Get a specific deck by deck_id
export function _getDeck (deck_id) {
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks[deck_id]}), 1000)
  })
}

// Save deck title
export function _saveDeckTitle(deckTitle) {
  return new Promise((res, rej) => {
    const deck_id = generateUID

    setTimeout(() => {
      decks = {
        ...decks,
        [deck_id]: {
          id: deck_id,
          title: deckTitle,
          questions: []
        }
      }

      res(decks[deck_id])
    }, 1000)
  })
}

// Add card to deck
export function _addCardToDeck({ deck_id, questionText, answerText }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      decks = {
        ...decks,
        [deck_id]: {
          ...decks[deck_id],
          questions: decks[deck_id].questions.concat({
            questionText,
            answerText
          })
        }
      }

      res(decks[deck_id])
    }, 500)
  })
}
