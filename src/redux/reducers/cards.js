import {
  ADD_CARD,
  // DELETE_CARD
} from '../actions/cards'

export default function cards(state = {}, action) {
  switch (action.type) {
    case ADD_CARD:
      const { deck_id, question, answer } = action
      return {
        ...state,
        [deck_id]: {
          ...state.decks[deck_id],
          questions: state.decks[deck_id].questions.concat({
            question,
            answer
          })
        }
      }
    // TODO: Add case DELETE_CARD
    default:
      return state
  }
}
