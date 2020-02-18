import {
  ADD_CARD,
  // DELETE_CARD
} from '../actions/cards'

export default function cards(state = {}, action) {
  switch (action.type) {
    case ADD_CARD:
      const { deck } = action
      const { deck_id } = deck

      return {
        ...state,
        [deck_id]: {
          ...state.deck
        }
      }
    // TODO: Add case DELETE_CARD
    default:
      return state
  }
}
