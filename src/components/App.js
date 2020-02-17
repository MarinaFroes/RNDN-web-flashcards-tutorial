import React, { Component }  from 'react'
import '../App.css'
import { handleReceiveDecks } from '../redux/actions/decks'

import DeckList from './DeckList'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleReceiveDecks())
  }
  

  render() {
    
    return (
      <div>
        <DeckList />
      </div>
    )
  }
}

export default connect()(App);

