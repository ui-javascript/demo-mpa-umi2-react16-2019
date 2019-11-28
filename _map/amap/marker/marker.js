import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker } from 'react-amap';

class App extends React.Component{
  constructor(){
    super();
    this.toolEvents = {
      created: (tool) => {
        this.tool = tool;
      }
    }
    this.mapPlugins = ['ToolBar'];
    this.mapCenter = {longitude: 120, latitude: 35};
    this.markerPosition = {longitude: 121, latitude: 36};
  }

  render(){
    return <div>
      <div style={{width: '100%', height: 400}}>
        <Map
          plugins={this.mapPlugins}
          center={this.mapCenter}
          zoom={6}
        >
          <Marker position={this.markerPosition} />
        </Map>
      </div>
    </div>
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.querySelector('#root')
)
