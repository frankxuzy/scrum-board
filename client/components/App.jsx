import React from 'react'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Backlog from './Backlog'

class App extends React.Component {
  render () {
    return (
      <div className='app-container'>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title">Backlog</p>
              <Backlog />
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">In Progress</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">In Review</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">Done</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App)
