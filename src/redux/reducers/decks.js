import {
  RECEIVE_DECKS,
  RECEIVE_SINGLE_DECK,
  SAVE_DECK_TITLE,
  // DELETE_DECK
} from '../actions/decks'

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS: 
      // This action returns all decks
      return {
        ...state,
        ...action.decks
      }
    case RECEIVE_SINGLE_DECK:
      // This action returns a single deck
      return {
        ...state,
        ...action.deck
      }
    case SAVE_DECK_TITLE:
      // This action returns a new deck only with title and id
      return {
        ...state,
        ...action.deck
      }
    // TODO: Add case DELETE_DECK
    default: 
      return state
  }
}
