import React, { Component } from 'react'
import './App.css'

class Best extends Component {
  render () {
    return (
      <div>
        <div className='Album-header'>
          <h1>Besties!</h1>
        </div>
        <div className='Best-box'>
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
          <div className='Best-container'>
            <div className='Best-image'>
            </div>
            <div className='Best-image2'>
            </div>
            <div className='Best-image3'>
            </div>
            <div className='Best-image4'>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Best
