import React, { Component } from 'react'
import './App.css'

class Album extends Component {
  changeToSinglePic = () => {
    this.props.navigate('SinglePic')
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
                <li><button>Puddin'</button></li>
                <li><button>Besties!</button></li>
                <li><button>Fun</button></li>
                <li><button>Work</button></li>
                <li><button> Misc.</button></li>
              </ul>
            </nav>
          </aside>
          </div>
          <div className='Album-container'>
            <div className='Album-image'>
            </div>
            <div className='Album-image2'>
            </div>
            <div onClick ={this.changeToSinglePic} className='Album-image3'>
            </div>
            <div className='Album-image4'>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Album
