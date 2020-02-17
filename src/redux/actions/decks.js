import { showLoading, hideLoading } from 'react-redux-loading'
import { getDecks, getDeck, saveDeckTitle } from '../../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_SINGLE_DECK = 'RECEIVE_SINGLE_DECK'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const DELETE_DECK = 'DELETE_DECK'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function handleReceiveDecks() {
  return dispatch => {
    dispatch(showLoading())

    return getDecks().then(({ decks }) => {
      dispatch(receiveDecks(decks))
      dispatch(hideLoading())
    })
  }
}

export function receiveSingleDeck(deck) {
  return {
    type: RECEIVE_SINGLE_DECK,
    deck
  }
}

export function handleReceiveSingleDeck(deck_id){
  return dispatch => {
    dispatch(showLoading())

    return dispatch(getDeck(deck_id)).then((deck) => {
      dispatch(receiveSingleDeck(deck))
      dispatch(hideLoading())
    }) 
  }
}

export function addDeckTitle(deckTitle) {
  return {
    type: SAVE_DECK_TITLE,
    deckTitle
  }
}

export function handleSaveDeckTitle(deckTitle) {
  return dispatch => {
    dispatch(showLoading())

    return dispatch(saveDeckTitle(deckTitle))
      .then((deckTitle) => {
        dispatch(addDeckTitle(deckTitle))
        dispatch(hideLoading())
      })
  }
}

// TODO: implement deleteDeck and handleDeleteDeck action creators
// export function deleteDeck(deck_id) {
//   type: DELETE_DECK,
//   deck_id
// }

// export function handleDeleteDeck() {
//   return dispatch => {
//     dispatch(showLoading())
//     return dispatch(deleteDeck()).then(() => {
//       dispatch(deleteDeck())
//       dispatch(hideLoading())
// })
// }
// }