import React, { Component } from 'react'
import './App.css'
import Error from './Error'
import SinglePic from './SinglePic'
import Album from './Album'
import Puddin from './Puddin'
import Best from './Best'
import Fun from './Fun'
import Work from './Work'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'Error'
    }
  }
  navigateToPage = (scr) => {
    this.setState({currentScreen: scr})
  }
  render () {
    let screen
    switch (this.state.currentScreen) {
      case 'Album': screen = <Album navigate={this.navigateToPage} />
        break
      case 'SinglePic': screen = <SinglePic />
        break
      case 'Puddin': screen = <Puddin navigate={this.navigateToPage} />
        break
      case 'Best': screen = <Best />
        break
      case 'Fun': screen = <Fun />
        break
      case 'Work': screen = <Work />
        break
      case 'Error': screen = <Error />
    }
    return (
      <div>{screen}</div>
    )
  }
}

export default App
