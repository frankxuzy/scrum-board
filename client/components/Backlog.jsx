import React from 'react'

import {DragSource} from 'react-dnd'

const backlogSource = {
  beginDrag (props) {
    return {}
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Backlog extends React.Component {
  render () {
    const {connectDragSource, isDragging} = this.props
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}
      className="card">
        <header className="card-header">
          <p className="card-header-title">
            Component
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">Save</a>
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
        </footer>
      </div>
    )
  }
}

export default DragSource('backlog', backlogSource, collect)(Backlog)
