import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


class Nav extends Component {

  render() {

    return (
      <nav>
        <ul>
          <li>
            <Link to="/" >
              DeckList
          </Link>
          </li>
          <li>
            <Link to="/newdeck" >
              New Deck
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(connect()(Nav))