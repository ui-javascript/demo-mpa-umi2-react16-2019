import React, {Component} from 'react';
import echarts from "echarts"
import ReactEcharts from 'echarts-for-react';

// 加载中国
// require('echarts/map/js/province/zhejiang.js');
// require('echarts/map/json/province/zhejiang.json');

// const geoJson = require('./330700.json')
// echarts.registerMap('JH', geoJson);

const geoJson = require('./zhejiang-custom-with-yiwu.json');
echarts.registerMap('ZJ', geoJson);


export default class ZheJiang extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  timeTicket = null;

  getInitialState = () => ({option: this.getOption()});

  componentDidMount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }

    this.timeTicket = setInterval(() => {
      const option = this.state.option;
      const r = new Date().getSeconds();

      option.title.text = 'iphone销量' + r;
      option.series[0].name = 'iphone销量' + r;
      option.legend.data[0] = 'iphone销量' + r;
      this.setState({option: option});
      console.log(option.series)
    }, 10000);
  };

  componentWillUnmount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
  };

  randomData() {
    return Math.round(Math.random() * 1000);
  };

  getOption = () => {
    return {
      title: {
        // text: 'iphone销量',
        // subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['iphone3'],
        show: false,
      },
      visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        // 文本，默认为数值文本
        // text: ['高', '低'],
        calculable: true,
        show: false,
        textStyle: {
          color: '#fff',
          fontSize: 40
        },
      },
      geo: {
        nameMap: {
          '义乌市' : '义乌市'
        }
      },

      // toolbox: {
      //   show: true,
      //   orient: 'vertical',
      //   left: 'right',
      //   top: 'center',
      //   feature: {
      //     dataView: {readOnly: false},
      //     restore: {},
      //     saveAsImage: {}
      //   }
      // },
      series: [
        {
          name: 'iphone3',
          type: 'map',
          // mapType: '浙江',
          mapType: 'ZJ',
          roam: false,
          textStyle: {
            color: '#fff',
            fontSize: 40
          },
          label: {
            normal: {
              show: true
              // show: false
            },
            emphasis: {
              show: true,
              // show: false
            }
          },
          data: [
            {name: '杭州市', value: this.randomData()},
            {name: '宁波市', value: this.randomData()},
            {name: '温州市', value: this.randomData()},
            {name: '绍兴市', value: this.randomData()},
            {name: '湖州市', value: this.randomData()},
            {name: '嘉兴市', value: this.randomData()},
            {name: '金华市', value: this.randomData()},
            {name: '衢州市', value: this.randomData()},
            {name: '台州市', value: this.randomData()},
            {name: '丽水市', value: this.randomData()},
            {name: '舟山市', value: this.randomData()},
            {
              name: '义乌市',
              value: this.randomData(),
              zIndex: 100
            },
          ]
        },
        // {
        //   name: 'iphone4',
        //   type: 'map',
        //   mapType: '浙江',
        //   label: {
        //     normal: {
        //       show: true
        //     },
        //     emphasis: {
        //       show: true
        //     }
        //   },
        //   data:[
        //     {name: '杭州市', value: this.randomData()},
        //     {name: '宁波市', value: this.randomData()},
        //     {name: '温州市', value: this.randomData()},
        //     {name: '绍兴市', value: this.randomData()},
        //     {name: '湖州市', value: this.randomData()},
        //     {name: '嘉兴市', value: this.randomData()},
        //     {name: '金华市', value: this.randomData()},
        //     {name: '衢州市', value: this.randomData()},
        //     {name: '台州市', value: this.randomData()},
        //     {name: '丽水市', value: this.randomData()},
        //     {name: '舟山市', value: this.randomData()},
        //   ]
        // },
      ]
    };
  };

  render() {

    return (<ReactEcharts
        option={this.state.option}
        style={{height: '500px', width: '100%'}}
        className='react_for_echarts'/>);
  };
}
