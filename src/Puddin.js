import React, { Component } from 'react'
import './App.css'

class Puddin extends Component {
  changeBestView = () => {
    this.props.navigate('Best')
  }
  changeAlbumView = () => {
    this.props.navigate('Album')
  }
  render () {
    return (
      <div>
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
                <li><button>Fun</button></li>
                <li><button>Work</button></li>
                <li><button> Misc.</button></li>
              </ul>
            </nav>
          </aside>
          </div>
          <div className='Puddin-container'>
            <div className='Puddin-image'>
            </div>
            <div className='Puddin-image2'>
            </div>
            <div className='Puddin-image3'>
            </div>
            <div className='Puddin-image4'>
            </div>
            <div className='Puddin-image5'>
              <p>I drew this! HaHahAHa! No, I didn't. Some peabrain did.</p>
              <p className='Puddin-signature'>-Harley</p>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Puddin
