import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
const Year = ({ match }) => <p>{match.params.id}</p>
let songs = [], songMeta = {}, currentSong

class Library extends Component {
  constructor() {
    super()
    this.state = { // trigger re-render with current song
      nowPlaying: false,
    }
  }

  pausedPlay(song) { // pause all songs and set/play current song
    for (let song in songMeta)
      songMeta[song].pause()
    currentSong = Object.keys(songMeta).filter(function(key) {return songMeta[key] === song})[0]
    this.setState(oldState => ({ nowPlaying: !oldState.nowPlaying }))
    song.play()
  }

  render() {
    // add playlistUI #use fs here to remove music.js hack 
    const { url } = this.props.match
    const years = []
    for (let year = 1940; year <= 2020; year+=10) {
      years.push(
        <li key={`year-${year}`}>
          <NavLink activeClassName="active" to={`${url}/${year}`}>{year}</NavLink>
        </li>
      )
    }

    songs = [] // clear playlist
    try {
      const year = this.props.location.pathname.split('/')[2]
      // copy sounds.js to music/YEAR/music.js #remove hack- !fs + webpack
      const files = require(`../assets/music/${year}/music.js`)
      const music = Object.values(files)[0]
    
      for (let song in music) {
        songMeta[song] = music[song]
        songs.push(
          <li
            onClick={this.pausedPlay.bind(this, music[song])}
            id={this.song}
            key={`song${song}`}
          >{song}</li>
        )
      }
    } catch {
      console.log('add some music')
    }
    
    return (
      <div className="container">
        <h3>LIBRARY</h3>
        <ul className='library-nav'>
          {years}
        </ul>
        {!songs.length ? '' :
        <div className="library">
          {currentSong === undefined ? <h4>&nbsp;</h4> : <h4>Playing: {currentSong}</h4>}
          <ul className="playlist">
            {songs}
          </ul>
        </div>}
        <Route path="/music/:id" component={Year} />
      </div>
    )
  }
}

export default Library