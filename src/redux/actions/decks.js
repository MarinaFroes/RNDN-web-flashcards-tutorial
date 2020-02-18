import { showLoading, hideLoading } from 'react-redux-loading'
import { getDecks, getDeck, saveDeckTitle } from '../../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_SINGLE_DECK = 'RECEIVE_SINGLE_DECK'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const DELETE_DECK = 'DELETE_DECK'
export const UPDATE_DECKS = 'UPDATE_DECKS'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function handleReceiveDecks() {
  return dispatch => {
    dispatch(showLoading())

    return getDecks()
      .then(res => {
      dispatch(receiveDecks(res))
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

    return getDeck(deck_id).then(res => {
      dispatch(receiveSingleDeck(res))
      dispatch(hideLoading())
    }) 
  }
}

export function addDeckTitle(deck) {
  return {
    type: SAVE_DECK_TITLE,
    deck
  }
}

export function handleSaveDeckTitle(deckTitle, deck_id) {
  return dispatch => {
    dispatch(showLoading())

    return saveDeckTitle(deckTitle, deck_id)
      .then(res => {
        dispatch(addDeckTitle(res))
        dispatch(hideLoading())
      })
  }
}

export function updateDecks(decks) {
  return {
    type: UPDATE_DECKS,
    decks
  }
}

export function handleUpdateDecks() {
  return dispatch => {
    dispatch(showLoading())
    return getDecks()
      .then(res => {
        dispatch(updateDecks(res))
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