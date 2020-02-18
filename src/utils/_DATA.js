let decks = {
  "wdkp9xk3edalu40frxoigl": {
    deck_id: "wdkp9xk3edalu40frxoigl",
    title: "React",
    questions: [
      {
        question: "React Props are like function arguments in JavaScript and attributes in HTML.",
        answer: true
      },
      {
        question: "When the state object changes, the component re-renders.",
        answer: true
      },
      {
        question: "The only way to initialize the state object is in the constructor.",
        answer: false
      },
      {
        question: "JSX is typesafe.",
        answer: true
      }
    ]
  },
  "e1bz7itvzi8351djcnes7j": {
    deck_id: "e1bz7itvzi8351djcnes7j",
    title: "JavaScript",
    questions: [
      {
        question: "JavaScript can change HTML attribute values.",
        answer: true
      },
      {
        question: "Multi-line comments in JavaScript start with //.",
        answer: false
      }
    ]
  }
}

// Generate random deck_id
export function generateUID () {
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
export function _saveDeckTitle({deckTitle, deck_id}) {
  return new Promise((res, rej) => {
    
    setTimeout(() => {
      decks = {
        ...decks,
        [deck_id]: {
          deck_id: deck_id,
          title: deckTitle,
          questions: []
        }
      }
      // Return the new deck
      res(decks[deck_id])
    }, 1000)
  })
}

// Add card to deck
export function _addCardToDeck({ deck_id, question, answer }) {
  console.log('---ADD-CARD-TO-DECK---')
  console.log(deck_id)
  console.log(question)
  console.log(answer)
  console.log(decks[deck_id])

  return new Promise((res, rej) => {
    setTimeout(() => {
      decks = {
        ...decks,
        [deck_id]: {
          ...decks[deck_id],
          questions: decks[deck_id].questions.concat({
            question,
            answer
          })
        }
      }
      console.log(decks[deck_id])
      // Returns the updated deck
      res(decks[deck_id])
    }, 500)
  })
}
