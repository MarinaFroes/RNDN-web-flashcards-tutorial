import {
  RECEIVE_DECKS,
  RECEIVE_SINGLE_DECK,
  SAVE_DECK_TITLE,
  UPDATE_DECKS
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
    case UPDATE_DECKS: 
      // This action updates all decks
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
      const { deck } = action
      // This action returns a new deck only with title and id
      return {
        ...state,
        [deck.deck_id]: deck
      }
    // TODO: Add case DELETE_DECK
    default: 
      return state
  }
}
