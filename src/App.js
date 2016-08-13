import React, { Component } from 'react'
// import smile from './pics/smile.gif'
import './App.css'
import SinglePic from './SinglePic'
import Home from './Home'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'Home'
    }
  }
  render () {
    let screen
    switch (this.state.currentScreen) {
      case 'Home': screen = <Home />
        break
      case 'SinglePic': screen = <SinglePic />
    }
    return (
      <div>{screen}</div>
    )
  }
}

export default App
