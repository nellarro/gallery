import React, { Component } from 'react'
import './App.css'

class Fun extends Component {
  render () {
    return (
      <div className="full">
        <div className='Album-header'>
          <h1>Fun & Games</h1>
        </div>
        <div className='Fun-box'>
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
          <div className='Fun-container'>
            <div className='Fun-image'>
            </div>
            <div className='Fun-image2'>
            </div>
            <div className='Fun-image3'>
            </div>
            <div className='Fun-image4'>
            </div>
            <div className='Fun-image5'>
            </div>
          </div>
        </div>
      </div>
        )
  }
    }
export default Fun
