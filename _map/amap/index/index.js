import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'react-amap';
import {CONSTANTS} from "../circle/circle-editor";

class App extends React.Component {
  constructor() {
    super();

    // Good Practice
    this.mapCenter = {
      longitude: 120,
      latitude: 30
    };
  }

  render() {
    return <div style={{ width: 600, height: 400 }}>
      <Map
        amapkey={CONSTANTS.AMAP_KEY}
        zoom={5}
        center={this.mapCenter}
      />
    </div>
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.querySelector('#root')
)
