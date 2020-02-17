let decks = {
  "wdkp9xk3edalu40frxoigl": {
    id: "wdkp9xk3edalu40frxoigl",
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
      }
    ]
  },
  "e1bz7itvzi8351djcnes7j": {
    id: "e1bz7itvzi8351djcnes7j",
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
    const deck_id = generateUID()

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
