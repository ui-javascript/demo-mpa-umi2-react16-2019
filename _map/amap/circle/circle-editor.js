import React from 'react';
import ReactDOM from 'react-dom';

export const CONSTANTS = {
  AMAP_KEY: '9b6ea973437f5253aa99de5a63d9e90c',
  AMAP_VERSION: '1.4.11',
}


import { Map, Circle, CircleEditor } from 'react-amap';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      active: true,
    }
  }

  toggleEdit(){
    this.setState({
      active: !this.state.active
    })
  }

  render(){
    const events = {
      move: () => {console.log('circle move')},
      adjust: () => {console.log('circle adjust')},
      end: () => {console.log('circle end')},
      created: (ins) => {console.log(ins)}
    }
    return <div>
      <div style={{width: '100%', height: 370}}>
        <Map center={{longitude: 120, latitude: 30}} zoom={12}>
          <Circle radius={5000} center={{longitude: 120, latitude: 30}}>
            <CircleEditor events={events} active={this.state.active} />
          </Circle>
          <button onClick={()=>{this.toggleEdit()}}>toggle editable</button>
        </Map>
      </div>
    </div>
  }
}


ReactDOM.render(
    <App />,
  document.querySelector('#root')
)
