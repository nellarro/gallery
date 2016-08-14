import React, { Component } from 'react'
import './App.css'

class Puddin extends Component {
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
          <div className='Puddin-container'>
            <div className='Puddin-image'>
            </div>
            <div className='Puddin-image2'>
            </div>
            <div className='Puddin-image3'>
            </div>
            <div className='Puddin-image4'>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Puddin
