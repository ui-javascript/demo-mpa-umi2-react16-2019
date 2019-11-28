import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'react-amap';

class App extends React.Component{
  constructor(){
    super();
    this.toggleCtrlBar = this.toggleCtrlBar.bind(this);
    this.state = {
      plugins: ['ControlBar']
    }
  }

  toggleCtrlBar(){
    if (this.state.plugins.indexOf('ControlBar') === -1) {
      this.setState({
        plugins: ['ControlBar']
      });
    } else {
      this.setState({
        plugins: []
      });
    }
  }

  render(){
    return <div>
      <div style={{width: '100%', height: '370px'}}>
        <Map viewMode="3D" plugins={this.state.plugins}/>
      </div>
      <button onClick={this.toggleCtrlBar}>Toggle Control Bar</button>
    </div>
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.querySelector('#root')
)
