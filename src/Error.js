import React, { Component } from 'react'
import './App.css'

class Error extends Component {
  render () {
    return (
      <div className='Error-fullPage'>
        <div className='Error-box'>
          <h1>404</h1>
          <h5>Page not found</h5>
          <p className='Error-p1'>Oh Batman...</p>
          <p className='Error-p2'>Did you really think you could find me?! Hahaha! Only one picture in this gallery gives you any idea of where I am. Let's play a game, Batsie!</p>
          <p className='Error-signature'>❤Harley Q.</p>
        </div>
      </div>
        )
  }
}

export default Error
