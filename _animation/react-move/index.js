import React, { Component } from 'react'
import ReactDOM from "react-dom"

import { shuffle, range } from 'd3-array'
import { interpolate, interpolateTransformSvg } from 'd3-interpolate'
import { easeBackOut, easeBackInOut } from 'd3-ease'
import { NodeGroup } from 'react-move'

const count = 15

function getData() {
  return shuffle(range(count).map((d) => ({ value: d }))).slice(0, count / 1.5)
}

export default class Example extends Component {
  state = {
    width: null,
    items: getData(),
  }

  componentDidMount() {
    this.updateWidth()
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  updateWidth = () => {
    this.setState(() => ({ width: this.container.offsetWidth || 200 }))
  }

  container = null

  render() {
    const { items, width } = this.state

    return (
      <div style={{ width: '100%' }} ref={(d) => { this.container = d }}>
        <button onClick={() => this.setState({ items: getData() })}>
          Update
        </button>
        {width === null ? null : (
          <NodeGroup
            data={items}
            keyAccessor={(d) => d.value}

            start={() => ({
              x: 0,
              opacity: 0,
              color: '#ff69b4',
            })}

            enter={() => ([
              {
                x: [width * 0.4],
                color: ['#00cf77'],
                timing: { delay: 500, duration: 500, ease: easeBackOut },
              },
              {
                opacity: [1],
                timing: { duration: 500 },
              },
            ])}

            update={() => ({
              x: [width * 0.4], // handle interrupt, if already at value, nothing happens
              opacity: 1, // make sure opacity set to 1 on interrupt
              color: '#00a7d8',
              timing: { duration: 500, ease: easeBackOut },
            })}

            leave={() => ([
              {
                x: [width * 0.8],
                color: ['#ff0063', '#bff69b4'],
                timing: { duration: 750, ease: easeBackInOut },
              },
              {
                opacity: [0],
                timing: { delay: 750, duration: 500 },
              },
            ])}

            interpolation={(begValue, endValue, attr) => {
              if (attr === 'transform') {
                return interpolateTransformSvg(begValue, endValue)
              }

              return interpolate(begValue, endValue)
            }}
          >
            {(nodes) => (
              <div style={{ margin: 10, height: count * 20, position: 'relative' }}>
                {nodes.map(({ key, state: { x, opacity, color } }) => (
                  <div
                    key={key}
                    style={{
                      position: 'absolute',
                      transform: `translate(${x}px, ${key * 20}px)`,
                      opacity,
                      color,
                    }}
                  >
                    {key + 1} - {Math.round(x)}
                  </div>
                ))}
              </div>
            )}
          </NodeGroup>
        )}
      </div>
    )
  }
}


ReactDOM.render(<Example />, mountNode)
