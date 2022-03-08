/**
 * https://gallery.echartsjs.com/editor.html?c=xByLjqtaLz
 */

import React from 'react';
import ReactDOM from 'react-dom';
import "../common.scss"
import ReactEcharts from 'echarts-for-react';

require('echarts/map/js/china.js');

function randomData() {
  return Math.round(Math.random()*2500);
}

let option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  visualMap: {
    seriesIndex: 0,
    min: 0,
    max: 2500,
    left: 'left',
    top: 'bottom',
    text: ['高','低'],           // 文本，默认为数值文本
    calculable: true
  },
  grid: {
    height: 200,
    width: 8,
    right: 80,
    bottom: 10
  },
  xAxis: {
    type: 'category',
    data: [],
    splitNumber: 1,
    show: false
  },
  yAxis: {
    position: 'right',
    min: 0,
    max: 20,
    splitNumber: 20,
    inverse: true,
    axisLabel: {
      show: true
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    data: []
  },
  series: [
    {
      zlevel: 1,
      name: '中国',
      type: 'map',
      mapType: 'china',
      selectedMode : 'multiple',
      roam: true,
      left: 0,
      right: '15%',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data:[
        {name: '北京',value: randomData() },
        {name: '天津',value: randomData() },
        {name: '上海',value: randomData() },
        {name: '重庆',value: randomData() },
        {name: '河北',value: randomData() },
        {name: '河南',value: randomData() },
        {name: '云南',value: randomData() },
        {name: '辽宁',value: randomData() },
        {name: '黑龙江',value: randomData() },
        {name: '湖南',value: randomData() },
        {name: '安徽',value: randomData() },
        {name: '山东',value: randomData() },
        {name: '新疆',value: randomData() },
        {name: '江苏',value: randomData() },
        {name: '浙江',value: randomData() },
        {name: '江西',value: randomData() },
        {name: '湖北',value: randomData() },
        {name: '广西',value: randomData() },
        {name: '甘肃',value: randomData() },
        {name: '山西',value: randomData() },
        {name: '内蒙古',value: randomData() },
        {name: '陕西',value: randomData() },
        {name: '吉林',value: randomData() },
        {name: '福建',value: randomData() },
        {name: '贵州',value: randomData() },
        {name: '广东',value: randomData() },
        {name: '青海',value: randomData() },
        {name: '西藏',value: randomData() },
        {name: '四川',value: randomData() },
        {name: '宁夏',value: randomData() },
        {name: '海南',value: randomData() },
        {name: '台湾',value: randomData() },
        {name: '香港',value: randomData() },
        {name: '澳门',value: randomData() }
      ]
    },
    {
      zlevel: 2,
      name: '地图指示',
      type: 'bar',
      barWidth: 5,
      itemStyle: {
        normal: {
          color: undefined,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      data: [20]
    }
  ]
};


/**
 * 根据值获取线性渐变颜色
 * @param  {String} start 起始颜色
 * @param  {String} end   结束颜色
 * @param  {Number} max   最多分成多少分
 * @param  {Number} val   渐变取值
 * @return {String}       颜色
 */
function getGradientColor (start, end, max, val) {
  var rgb = /#((?:[0-9]|[a-fA-F]){2})((?:[0-9]|[a-fA-F]){2})((?:[0-9]|[a-fA-F]){2})/;
  var sM = start.match(rgb);
  var eM = end.match(rgb);
  var err = '';
  max = max || 1
  val = val || 0
  if (sM === null) {
    err = 'start';
  }
  if (eM === null) {
    err = 'end';
  }
  if (err.length > 0) {
    throw new Error('Invalid ' + err + ' color format, required hex color');
  }
  var sR = parseInt(sM[1], 16),
    sG = parseInt(sM[2], 16),
    sB = parseInt(sM[3], 16);
  var eR = parseInt(eM[1], 16),
    eG = parseInt(eM[2], 16),
    eB = parseInt(eM[3], 16);
  var p = val / max;
  var gR = Math.round(sR + (eR - sR) * p).toString(16),
    gG = Math.round(sG + (eG - sG) * p).toString(16),
    gB = Math.round(sB + (eB - sB) * p).toString(16);
  return '#' + gR + gG + gB;
}


function App() {
  return (
    <div>
      <ReactEcharts
        option={option}
        style={{height: '500px', width: '100%'}}
        className='react_for_echarts'/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
