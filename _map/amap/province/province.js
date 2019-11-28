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

    this.plugins = [
      // 'MapType',
      // 'Scale',
      // 'OverView',
      // 'ControlBar',
      // 'DistrictLayer',
      // {
      //   name: 'DistrictLayer',
      //   options: {
      //     visible: true,
      //     onCreated(ins){
      //       debugger
      //       console.log(ins);
      //     },
      //     // zIndex: 12,
      //     // adcode: [this.code],
      //     // depth: this.depth,
      //     // styles: {
      //     //   'fill': function (properties) {
      //     //     // properties为可用于做样式映射的字段，包含
      //     //     // NAME_CHN:中文名称
      //     //     // adcode_pro
      //     //     // adcode_cit
      //     //     // adcode
      //     //     const adcode = properties.adcode;
      //     //     return this.getColorByAdcode(adcode);
      //     //   },
      //     //   'province-stroke': 'cornflowerblue',
      //     //   'city-stroke': 'white', // 中国地级市边界
      //     //   'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
      //     // }
      //   }
      // }
    ]

    this.code = 130000;
    this.depth = 2;
    this.colors = {};

    // @fix created内部取不到??
    this.amap = window.AMap

    this.amapEvents = {
      created: (mapInstance) => {
        // console.log('高德地图 Map 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：');

        // debugger
        // console.log(mapInstance.getZoom());
        // const AMap = window.AMap;
        // const DistrictLayer = new AMap.DistrictLayer();

        // console.log(AMapDistrictLayer)
        // debugger

        let disProvince = new this.amap.DistrictLayer.Province({
          zIndex: 12,
          adcode: [this.code],
          depth: this.depth,
          styles: {
            'fill': function (properties) {
              // properties为可用于做样式映射的字段，包含
              // NAME_CHN:中文名称
              // adcode_pro
              // adcode_cit
              // adcode
              const adcode = properties.adcode;
              return this.getColorByAdcode(adcode);
            },
            'province-stroke': 'cornflowerblue',
            'city-stroke': 'white', // 中国地级市边界
            'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
          }
        });

        disProvince.setMap(mapInstance);

      }
    };



  }

  getColorByAdcode = (adcode) => {
    if (!this.colors[adcode]) {
      const gb = Math.random() * 155 + 50;
      this.colors[adcode] = 'rgb(' + gb + ',' + gb + ',255)'
    }

    return this.colors[adcode];
  };

  changeDepth = () => {

  }

  render() {
    return <div style={{ width: 600, height: 400 }}>
      <Map
        amapkey={CONSTANTS.AMAP_KEY}
        zoom={5}
        center={this.mapCenter}
        viewMode={'3D'}
        events={this.amapEvents}
        plugins={this.plugins}
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
