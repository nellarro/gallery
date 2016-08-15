import React, { Component } from 'react'
import './App.css'

class SinglePic extends Component {
  changeToAlbum = () => {
    this.props.navigate('Album')
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Oh, Look! A picture!</h1>
        </div>
        <div className='App-container'>
          <div className='App-image'></div>
          <button className='App-button' onClick={this.navigateToAlbum}>↫ Go Back</button>
        </div>
      </div>
    )
  }
}

export default SinglePic
