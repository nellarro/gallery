import React, { Component } from 'react'
// import smile from './pics/smile.gif'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Oh, Look! A picture!</h1>
        </div>
        <div className='App-container'>
          <div className='App-image'></div>
          <button className='App-button'>↫ Go Back</button>
        </div>
      </div>
    )
  }
}

export default App
