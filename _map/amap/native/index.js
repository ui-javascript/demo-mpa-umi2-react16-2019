import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    // Good Practice
    // this.mapCenter = {
    //   longitude: 120,
    //   latitude: 30
    // };

    this.mapCenter = [
      // 杭州
      // 120.15,
      // 30.28,

      // 金华
      120.10,
      29.12
    ]

    this.state = {
      adCode: 330000,
      depth: 2,
    }

    this.disProvince = null

    // 颜色辅助方法
    this.colors = {};
    this.map = null

    this.getColorByAdcode = this.getColorByAdcode.bind(this)

  }

  componentDidMount() {

    const { adCode, depth} = this.state
    var opts = {
      subdistrict: 0,
      extensions: 'all',
      level: 'city'
    };

    var district = new AMap.DistrictSearch(opts);

    district.search('浙江省', (status, result) => {
      var bounds = result.districtList[0].boundaries;
      var mask = []
      for (var i = 0; i < bounds.length; i += 1) {
        mask.push([bounds[i]])
      }
      this.map = new AMap.Map("container", {
        mask: mask,
        zoom: 7,
        center: this.mapCenter,
        viewMode: '3D',
        pitch: 1,
        resizeEnable: false,
        showIndoorMap: false,
        draggable: false,
      });
      this.initPro(adCode, depth);
    })



  }

  getColorByAdcode = (adcodeCity, adcode) => {

    // 义乌单独处理
    if ([330782].includes(adcode)) {
      // debugger
      let gb = Math.random() * 155 + 50;
      this.colors[adcode] = 'rgb(' + gb + ',' + gb + ',255)'
      return this.colors[adcode]
    }


    if (!this.colors[adcodeCity]) {
      let gb = Math.random() * 155 + 50;
      this.colors[adcodeCity] = 'rgb(' + gb + ',' + gb + ',255)';
    }
    return this.colors[adcodeCity];
  };

  initPro = (code, dep) => {
    dep = typeof dep == 'undefined' ? 2 : dep;

    this.setState({
      adCode: code,
      depth: dep,
    })

    this.disProvince && this.disProvince.setMap(null);

    let self = this
    this.disProvince = new AMap.DistrictLayer.Province({
      zIndex: 12,
      // adcode: [code],
      adcode: [
        // 浙江
        // 330000,
        // 杭州
        330100,
        // 宁波
        330200,
        // 温州
        330300,
        // 嘉兴
        330400,
        // 湖州
        330500,
        // 绍兴
        330600,
        // 金华
        330701,
        330702,
        330703,
        330723,
        330726,
        330727,
        330781,
        330783,
        330784,
        // 义乌
        330782,
        // 衢州
        330800,
        // 舟山
        330900,
        // 台州
        331000,
        // 丽水
        331100
      ],
      depth: dep,
      styles: {
        'fill': function (properties) {
          // properties为可用于做样式映射的字段，包含
          // NAME_CHN:中文名称
          // adcode_pro
          // adcode_cit
          // adcode
          var adcodeCity = properties.adcode_cit;
          var adcode = properties.adcode;
          return self.getColorByAdcode(adcodeCity, adcode);
        },
        // 省边界
        'province-stroke': 'cornflowerblue',
        // 中国地级市边界
        'city-stroke': 'white',
        // 中国区县边界
        // 'county-stroke': 'rgba(255,255,255,0.5)',
        'county-stroke': 'none'
      }
    });



    var marker = new AMap.Marker({
      map: this.map,
      position:[
        // 116.473188,
        // 39.993253,
        120.07,
        29.30
      ],
      // visible: false,
      label: {
        // 修改label相对于maker的位置
        offset: new AMap.Pixel(20, 20),
        content: "义乌"
      }
    })

    // const newIcon = new AMap.Icon({
    //   // size: new AMap.Size(52, 26), // 图标尺寸
    //   // image: !marker.vehicle.idle ? iconCar : iconCarGray, // Icon的图像
    //   // imageSize: iconMeta.size, // 根据所设置的大小拉伸或压缩图片
    // })
    // marker.setIcon(newIcon)

    const circle = new AMap.Circle({
      center: new AMap.LngLat("120.07", "29.30"), // 圆心位置
      radius: 1000,  //半径
      strokeColor: "#F33",  //线颜色
      strokeOpacity: 1,  //线透明度
      strokeWeight: 3,  //线粗细度
      fillColor: "#ee2200",  //填充颜色
      fillOpacity: 0.35 //填充透明度
    });
    this.map.add(circle)


    this.disProvince.setMap(this.map);
  }

  // 按钮事件
  changeAdcode = (code, depth) => {
    if (code != 100000) {
      this.initPro(code, depth);
    }
  }

  changeDepth = (adCode, dep) => {
    this.initPro(adCode, dep);
  }

  render() {
    return(<div id="container" style={{
      width: 800,
      height: 500,
      margin: 0,
      backgroudColor: 'red!important'
    }}></div>)
  }
}

ReactDOM.render(
  <div>
    <App />

  </div>,
  document.querySelector('#root')
)
