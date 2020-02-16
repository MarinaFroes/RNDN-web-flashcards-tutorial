import {
  _getDecks,
  _getDeck,
  _saveDeckTitle,
  _addCardToDeck
} from './_DATA'

export function getDecks() {
  return _getDecks()
}

export function getDeck() {
  return _getDeck()
}

export function saveDeckTitle(info) {
  return _saveDeckTitle(info)
}

export function addCardToDeck(info) {
  return _addCardToDeck(info)
}

