import React, { Component }  from 'react'
import '../App.css'
import { handleReceiveDecks } from '../redux/actions/decks'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import DeckList from './DeckList'
import NewDeck from './NewDeck'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleReceiveDecks())
  }
  
  render() {
    const { decks } = this.props
    
    return (
      <div>
        <LoadingBar />
        <DeckList decks={decks} />
        <NewDeck />
      </div>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}
export default connect(mapStateToProps)(App);

