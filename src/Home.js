import React, { Component } from 'react'
// import smile from './pics/smile.gif'
import './App.css'

class Home extends Component {
  render () {
    return (
      <div>
        <div className='Home-header'>
          <h1>Home-sies!</h1>
        </div>
        <div className='Home-container'>
          <div className='Home-image'>
          </div>
        </div>
        <div className='Home-nav'>
          <aside className='Home-aside'>
            <nav>
              <ul>
                <li><button>Me</button></li>
                <li><button>Puddin'</button></li>
                <li><button>Besties!</button></li>
                <li><button>My Babies.</button></li>
                <li><button>Work</button></li>
                <li><button> Misc.</button></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}

export default Home
