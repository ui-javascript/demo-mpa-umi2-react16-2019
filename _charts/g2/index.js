import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import G2 from '@antv/g2'

function App() {
  // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
  const data = [
    {genre: 'Sports', sold: 275},
    {genre: 'Strategy', sold: 115},
    {genre: 'Action', sold: 120},
    {genre: 'Shooter', sold: 350},
    {genre: 'Other', sold: 150}
  ];


  // Step 1: 创建 Chart 对象
  const chart = new G2.Chart({
    container: 'root', // 指定图表容器 ID
    width: 600, // 指定图表宽度
    height: 300, // 指定图表高度

  });

  chart.guide().html({
    // html 的中心位置， 值为原始数据值，支持 callback
    position: [ 30, 10],
    alignX: 'right',
    alignY: 'bottom',
    offsetX: 10,
    offsetY: 10,
    // html 代码，也支持callback,可能是最大值、最小值之类的判定
    html: '图表标题',
    // zIndex: {number}
  });

  // chart.guide().text({
  //   text: '人口结构',
  //   position: 'bottom-center',
  //   // textStyle: {...},
  //   htmlTpl: '<h1>图表标题</h1>'
  // })

  // Step 2: 载入数据源
  chart.source(data);

  // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
  chart.interval().position('genre*sold').color('genre')

  // Step 4: 渲染图表
  chart.render();

  return null;
}


ReactDOM.render(<App/>,
  document.getElementById("root"));
