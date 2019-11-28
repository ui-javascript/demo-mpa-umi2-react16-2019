/**
 * https://gallery.echartsjs.com/editor.html?c=xHyz853kSx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import echarts from "echarts"
import ReactEcharts from 'echarts-for-react';
import "echarts-liquidfill"


var waves = [{
  value: 0.4,
  valueSine: 0.1,
  period: 5000,
  amplitude: 120,
  amplitudeSine: 100,
  waveLength: '80%'
}, {
  value: 0.42,
  valueSine: 0.05,
  period: 4000,
  amplitude: 100,
  amplitudeSine: 10,
  waveLength: '40%'
}, {
  value: 0.4,
  valueSine: 0.05,
  period: 1500,
  amplitude: 50,
  amplitudeSine: 10,
  waveLength: '20%'
}, {
  value: 0.4,
  valueSine: 0.05,
  period: 3000,
  amplitude: 70,
  amplitudeSine: 10,
  waveLength: '60%'
}, {
  value: 0.35,
  valueSine: 0.05,
  period: 2000,
  amplitude: 60,
  amplitudeSine: 10,
  waveLength: '40%'
}, {
  value: 0.3,
  valueSine: 0.05,
  period: 4000,
  amplitude: 15,
  amplitudeSine: 10,
  waveLength: '20%'
}, {
  value: 0.3,
  valueSine: 0.05,
  period: 1500,
  amplitude: 60,
  amplitudeSine: 10,
  waveLength: '30%'
}];

var data = [];
var phases = [0, 0.6, 0.8];
var values = [1, 0.9, 0.85];
for (var w = 0; w < waves.length; ++w) {
  for (var i = 0; i < 3; ++i) {
    data.push({
      value: waves[w].value * values[i],
      amplitude: waves[w].amplitude,
      phase: phases[i] + w,
      period: waves[w].period,
      waveLength: waves[w].waveLength
    });
  }
}


let option = {
  backgroundColor: new echarts.graphic.LinearGradient(
    0, 0, 0, 1, [{
      offset: 0,
      color: '#faf2cd'
    }, {
      offset: 0.4,
      color: '#d2b083'
    }, {
      offset: 1,
      color: '#a38d66'
    }]
  ),
  series: [{
    radius: '200%',
    color: ['#fdeec7', '#799fa2', '#282536'],
    type: 'liquidFill',
    data: data,
    animationDurationUpdate: 2000,
    animationEasingUpdate: 'cubicInOut',
    backgroundStyle: {
      color: 'transparent'
    },
    outline: {
      show: false
    },
    label: {
      normal: {
        textStyle: {
          color: '#282536',
          fontSize: 72
        },
        formatter: function() {
          return '浮世绘';
        }
      }
    }
  }]
};


function App() {

  return (<ReactEcharts
        option={option}
        style={{height: '500px', width: '100%'}}
        className='react_for_echarts'/>);
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
