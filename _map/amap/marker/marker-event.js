import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker } from 'react-amap';

class App extends React.Component{
  constructor(){
    super();
    this.markerEvents = {
      created: (instance) => {
        console.log('Marker 实例创建成功；如果你需要对原生实例进行操作，可以从这里开始；');
        console.log(instance);
      },
      click: (e) => {
        console.log("你点击了这个图标；调用参数为：");
        console.log(e);
      },
      dblclick: (e) => {
        console.log("你刚刚双击了这个图标；调用参数为：");
        console.log(e);
      },
      // ... 支持绑定所有原生的高德 Marker 事件
    }
  }

  render(){
    return <div style={{width: '100%', height: 400}}>
      <Map
        plugins={['ToolBar']}
        center={{longitude: 120, latitude: 35}}
      >
        <Marker
          position={{longitude: 120, latitude: 35 }}
          clickable
          events={this.markerEvents}
        />
      </Map>
    </div>
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.querySelector('#root')
)
