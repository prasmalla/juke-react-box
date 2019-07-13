import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

const Year = ({ match }) => <p>{match.params.id}</p>

class Library extends Component {
  render() {
    // add playlistUI
    const { url } = this.props.match
    return (
      <div className="container">
        <h2>library</h2>
        <ul class='library'>
          <li>
            <NavLink activeClassName="active" to="/library/1990">1990</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/library/2000">2000</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/library/2010">2010</NavLink>
          </li>
        </ul>
        <Route path="/library/:id" component={Year} />
      </div>
    );
  }
}

export default Library;