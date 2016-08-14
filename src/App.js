import React, { Component } from 'react'
// import smile from './pics/smile.gif'
import './App.css'
import SinglePic from './SinglePic'
import Album from './Album'
import Puddin from './Puddin'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'SinglePic'
    }
  }
  render () {
    let screen
    switch (this.state.currentScreen) {
      case 'Album': screen = <Album />
        break
      case 'SinglePic': screen = <SinglePic />
        break
      case 'Puddin': screen = <Puddin />
    }
    return (
      <div>{screen}</div>
    )
  }
}

export default App
