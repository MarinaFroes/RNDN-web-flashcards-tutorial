import React, { Component } from 'react'
import { handleAddCard } from '../redux/actions/cards'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
    toDeck: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { dispatch, deck_id } = this.props
    const { question, answer } = this.state

    const card = {
      id: deck_id,
      question,
      answer
    }

    dispatch(handleAddCard(card))

    this.setState({
      question: '',
      answer: '',
      toDeck: true
    })
  }

  render() {
    const { question, answer, toDeck } = this.state
    const { deck_id } = this.props

    if (toDeck === true) {
      return <Redirect to={`/deck/${deck_id}`} />
    }

    return (
      <div style={{ border: '2px solid blue' }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add new card:
            <input
              type="text"
              name="question"
              id="question"
              value={question}
              placeholder="Question"
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="answer"
              id="answer"
              value={answer}
              placeholder="Answer"
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

export default connect()(NewCard)