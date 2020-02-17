import React, { Component } from 'react'
import { handleSaveDeckTitle } from '../redux/actions/decks'

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

    const { deckTitle } = this.state

    handleSaveDeckTitle(deckTitle)
      .then(() => {
        this.setState({
          deckTitle: ''
        })
      })
  }

  render() {
    console.log('----NEW DECK----')
    console.log(`deckTitle state: ${this.state.deckTitle}`)

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add deck title:
            <input
              type="text"
              name="deckTitle"
              id="deckTitle"
              value={this.state.deckTitle}
              placeholder="Title"
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default NewDeck