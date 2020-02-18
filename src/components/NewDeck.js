import React, { Component } from 'react'
import { handleSaveDeckTitle } from '../redux/actions/decks'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewDeck extends Component {
  state = {
    deckTitle: '',
    toHome: false,
    deckId: ''
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

    dispatch(handleSaveDeckTitle(deckTitle))
    
    this.setState({
      deckTitle: '',
      toHome: true
    })
  }

  render() {
    const { deckTitle } = this.state

    if (this.state.toHome === true) {
      return <Redirect to="/" />
    }

    return (
      <div style={{border: '2px solid blue'}}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add deck title:
            <input
              type="text"
              name="deckTitle"
              id="deckTitle"
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