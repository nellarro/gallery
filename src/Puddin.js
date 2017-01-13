import React, { Component } from 'react'
import './App.css'

class Puddin extends Component {
  changeFour = () => {
    this.props.navigate('Error')
  }
  changeBestView = () => {
    this.props.navigate('Best')
  }
  changeAlbumView = () => {
    this.props.navigate('Album')
  }
  changeFunView = () => {
    this.props.navigate('Fun')
  }
  changeToWork = () => {
    this.props.navigate('Work')
  }
  render () {
    return (
      <div className="full">
        <div className='Album-header'>
          <h1>Puddin'</h1>
        </div>
        <div className='Box'>
        <div className='Album-nav'>
          <aside className='Album-aside'>
            <nav>
              <ul>
                <li><button onClick={this.changeAlbumView}>All About Me</button></li>
                <li><button>Puddin'</button></li>
                <li><button onClick={this.changeBestView}>Besties!</button></li>s
                <li><button onClick={this.changeFunView}>Fun</button></li>
                <li><button onClick={this.changeToWork}>Work</button></li>
                <li><button> Misc.</button></li>
              </ul>
            </nav>
          </aside>
          </div>
          <div className='Puddin-container'>
            <div onClick={this.changeFour} className='Puddin-image'>
            </div>
            <div onClick={this.changeFour} className='Puddin-image2'>
            </div>
            <div onClick={this.changeFour} className='Puddin-image3'>
            </div>
            <div onClick={this.changeFour} className='Puddin-image4'>
            </div>
            <div onClick={this.changeFour} className='Puddin-image5'>
              <p className='Puddin-paragraph'>I drew this! HaHahAHa! No, I didn't. Some peabrain did.</p>
              <p className='Puddin-signature'>-Harley</p>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Puddin
