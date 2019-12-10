/**
 * https://gallery.echartsjs.com/editor.html?c=xByLjqtaLz
 */

import React from 'react';
import ReactDOM from 'react-dom';
import "../common.scss"
import ReactEcharts from 'echarts-for-react';


function App() {
  return (
    <div>
      <ReactEcharts
        option={{}}
        style={{height: '500px', width: '100%'}}
        className='react_for_echarts'/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
