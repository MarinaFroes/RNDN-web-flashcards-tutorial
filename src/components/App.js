import React, { Component }  from 'react'
import '../App.css'
import { handleReceiveDecks } from '../redux/actions/decks'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import DeckList from './DeckList'
import NewDeck from './NewDeck'
import NewCard from './NewCard'
import Deck from './Deck'
import Nav from './Nav'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleReceiveDecks())
  }
  
  render() {
    
    return (
      <Router>
        <>
          <Nav />
          <LoadingBar />
          <div>
            <Route path="/" exact component={DeckList} />
            <Route path="/newdeck" exact component={NewDeck} />
            <Route path="/newcard" exact component={NewCard} />
            <Route path="/deck/:deck_id" component={Deck} />
          </div>
        </>
      </Router>
    )
  }
}

export default connect()(App);

