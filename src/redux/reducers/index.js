import { combineReducers } from 'redux'
import cards from './cards'
import decks from './decks'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  cards,
  decks,
  loadingBar: loadingBarReducer
})
