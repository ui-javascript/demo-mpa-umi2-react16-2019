import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

import { Map } from 'react-amap';
import {CONSTANTS} from "../circle/circle-editor";

class App extends React.Component{
  render(){
    const plugins = [
      'MapType',
      'Scale',
      'OverView',
      'ControlBar', // v1.1.0 新增
      {
        name: 'ToolBar',
        options: {
          visible: true,  // 不设置该属性默认就是 true
          onCreated(ins){
            console.log(ins);
          },
        },
      }
    ]
    return <div style={{width: '100%', height: '400px'}}>
      <Map
        amapkey={CONSTANTS.AMAP_KEY}
        plugins={plugins}
      />
    </div>
  }
}



// render
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root"));
