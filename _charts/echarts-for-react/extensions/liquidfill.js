import React from 'react';
import ReactDOM from 'react-dom';
import ReactEcharts from 'echarts-for-react';
import "echarts-liquidfill"

var value = 0.12
var data = []

data.push(value)
data.push(value)
data.push(value)
data.push(value)
data.push(value)

function App() {

  return (
    <div>
      <ReactEcharts
        option={{
            backgroundColor: '#1b2735',
            title: {
              text: 'CPU使用率',
              textStyle: {
                fontWeight: 'normal',
                fontSize: 25,
                color: 'rgb(97, 142, 205)'
              }
            },
            series: [{
              type: 'liquidFill',
              radius: '80%',
              data: data,
              backgroundStyle: {
                borderWidth: 5,
                borderColor: 'rgb(255,0,255,0.9)',
                color: 'rgb(255,0,255,0.01)'
              },
              label: {
                normal: {
                  formatter: (value * 100).toFixed(2) + '%',
                  textStyle: {
                    fontSize: 50
                  }
                }
              }
            }]
        }}
        // className={"w-full"}
        style={{height: '500px'}}
        // className='react_for_echarts'
      />
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
