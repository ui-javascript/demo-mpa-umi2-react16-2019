import React, { Component } from 'react'
import ReactDOM from "react-dom"
import ReactPlayer from 'react-player'

class App extends Component {
  render () {
    return <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
  }
}

ReactDOM.render(<App />, mountNode)
