import React, { Component } from 'react'
import './App.css'
import SinglePic from './SinglePic'
import Album from './Album'
import Puddin from './Puddin'
import Best from './Best'
import Fun from './Fun'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'Fun'
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
        break
      case 'Best': screen = <Best />
        break
      case 'Fun': screen = <Fun />
        break
    }
    return (
      <div>{screen}</div>
    )
  }
}

export default App
