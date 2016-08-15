import React, { Component } from 'react'
import './App.css'

class Album extends Component {
  changeToSinglePic = () => {
    this.props.navigate('SinglePic')
  }
  changeFour = () => {
    this.props.navigate('Error')
  }
  changeToPuddin = () => {
    this.props.navigate('Puddin')
  }
  changeToBest = () => {
    this.props.navigate('Best')
  }
  changeToFun = () => {
    this.props.navigate('Fun')
  }
  changeToWork = () => {
    this.props.navigate('Work')
  }
  render () {
    return (
      <div>
        <div className='Album-header'>
          <h1>◊All About Me◊</h1>
        </div>
        <div className='BIGBOX'>

        <div className='Album-nav'>
          <aside className='Album-aside'>
            <nav>
              <ul>
                <li><button>All About Me</button></li>
                <li><button onClick ={this.changeToPuddin}>Puddin'</button></li>
                <li><button onClick={this.changeToBest}>Besties!</button></li>
                <li><button onClick={this.changeToFun}>Fun</button></li>
                <li><button onClick={this.changeToWork}>Work</button></li>
                <li><button> Misc.</button></li>
              </ul>
            </nav>
          </aside>
          </div>
          <div className='Album-container'>
            <div onClick={this.changeFour} className='Album-image'>
            </div>
            <div onClick={this.changeFour} className='Album-image2'>
            </div>
            <div onClick={this.changeToSinglePic} className='Album-image3'>
            </div>
            <div onClick={this.changeFour} className='Album-image4'>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Album
