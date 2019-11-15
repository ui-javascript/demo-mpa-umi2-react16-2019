import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Skeleton from 'react-loading-skeleton';

class App extends Component {
  render () {
    return <Skeleton count={2}/>
  }
}

ReactDOM.render(<App />, mountNode)
