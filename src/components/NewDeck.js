import React, { Component } from 'react'
import { handleSaveDeckTitle } from '../redux/actions/decks'
import { connect } from 'react-redux'

class NewDeck extends Component {
  state = {
    deckTitle: ''
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
      deckTitle: ''
    })
  }

  render() {
    const { deckTitle } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add deck title:
            <input
              type="text"
              name="deckTitle"
              id="deckTitle"
              value={deckTitle}
              placeholder="Title"
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Save</button>
        </form>
        <p>{deckTitle}</p>
      </div>
    )
  }
}

export default connect()(NewDeck)