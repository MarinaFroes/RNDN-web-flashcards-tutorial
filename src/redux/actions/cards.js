import { showLoading, hideLoading } from 'react-redux-loading'
import { addCardToDeck } from '../../utils/api'

export const ADD_CARD = 'ADD_CARD'
// export const DELETE_CARD = 'DELETE_CARD'

export function addCard({ deck_id, question, answer }) {
  return {
    type: ADD_CARD,
    deck_id,
    question,
    answer
  }
}

export function handleAddCard(card) {
  return dispatch => {
    dispatch(showLoading())

    return addCardToDeck(card)
      .then(res => {
        dispatch(addCard(res))
        dispatch(hideLoading())
      })
  }
}

// TODO: implement DELETE_CARD