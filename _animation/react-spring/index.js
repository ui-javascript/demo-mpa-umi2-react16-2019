import ReactDOM from "react-dom"
import {useSpring, animated} from 'react-spring'

function Fade() {
  const props = useSpring({
    opacity: 1,
    from: {opacity: 0}
  })

  return <animated.div style={props}>I will fade in</animated.div>
}

function Star() {
  const props = useSpring({ x: 100, from: { x: 0 } })
  return (
    <animated.svg strokeDashoffset={props.x}>
      {/*<path d="..." />*/}
    </animated.svg>
  )
}

function Number() {
  const props = useSpring({ number: 1, from: { number: 0 } })
  return <animated.span>{props.number}</animated.span>
}



function App() {
  return [
    <Fade key="fade" />
    // , <Star key="star" />
    , <Number key="number" />
  ]
}

ReactDOM.render(<App />, mountNode);

