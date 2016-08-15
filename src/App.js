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
      currentScreen: 'Album'
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
      case 'SinglePic': screen = <SinglePic navigate={this.navigateToPage} />
        break
      case 'Puddin': screen = <Puddin navigate={this.navigateToPage} />
        break
      case 'Best': screen = <Best navigate={this.navigateToPage}/>
        break
      case 'Fun': screen = <Fun navigate={this.navigateToPage} />
        break
      case 'Work': screen = <Work navigate={this.navigateToPage}/>
        break
      case 'Error': screen = <Error />
        break
      default: screen = <Album navigate={this.navigateToPage}/>
    }
    return (
      <div>{screen}</div>
    )
  }
}

export default App
