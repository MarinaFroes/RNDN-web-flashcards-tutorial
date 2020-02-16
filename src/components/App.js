import React, { Component }  from 'react'
import '../App.css'
import { getDecks, saveDeckTitle } from '../utils/api'

class App extends Component {
  state = {
    question: '',
    answer: '',
    deckTitle: '',
    decks: {}
  }

  componentDidMount() {
    getDecks().then(decks => {
      this.setState({ decks })
    })
  }
  
  handleChange = (e) => {
    this.setState({
      deckTitle: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    saveDeckTitle(this.state.deckTitle)
      .then(() => {
        this.setState({
          deckTitle: ''
        })
    })
  }

  render() {
    console.log("DECKS:")
    console.log(this.state.decks)
    
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
        {
          Object.keys(this.state.decks)
            .map(deck => (
              <p>{deck.title}</p>
            ))
        }
      </div>
    )
  }
}

export default App;
