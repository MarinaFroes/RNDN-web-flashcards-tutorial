import React, { Component } from 'react'
import { handleSaveDeckTitle } from '../redux/actions/decks'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { generateUID } from '../utils/_DATA'

class NewDeck extends Component {
  state = {
    deckTitle: '',
    toDeck: false,
    deck_id: ''
  }

  handleChange = (e) => {
    this.setState({
      deckTitle: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { dispatch } = this.props
    const { deckTitle } = this.state
    const deck_id = generateUID()

    dispatch(handleSaveDeckTitle({ deckTitle, deck_id }))
      
    this.setState({
      deckTitle: '',
      toDeck: true,
      deck_id
    })
  }

  render() {
    const { deckTitle, deck_id } = this.state

    if (this.state.toDeck === true) {
      return <Redirect to={`/deck/${deck_id}`} />
    }

    return (
      <div style={{border: '2px solid blue'}}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add deck title:
            <input
              type="text"
              name="deckTitle"
              value={deckTitle}
              placeholder="Deck title"
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Create deck</button>
        </form>
      </div>
    )
  }
}

export default connect()(NewDeck)