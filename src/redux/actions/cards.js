import { showLoading, hideLoading } from 'react-redux-loading'
import { addCardToDeck } from '../../utils/api'

export const ADD_CARD = 'ADD_CARD'
// export const DELETE_CARD = 'DELETE_CARD'

export function addCard(deck) {
  console.log('---ADD CARD---')
  console.log(deck)
  
  return {
    type: ADD_CARD,
    deck
  }
}

export function handleAddCard(card) {
  return dispatch => {
    dispatch(showLoading())
    console.log('----HANDLE ADD CARD----')
    console.log(card)
    return addCardToDeck(card)
      .then(res => {
        dispatch(addCard(res))
        dispatch(hideLoading())
      }).catch(err => console.log(err))
  }
}

// TODO: implement DELETE_CARD