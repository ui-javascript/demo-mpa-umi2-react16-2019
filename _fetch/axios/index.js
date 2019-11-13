import {hi} from "./api";
import {Button} from "antd"

function App() {
  const download = () => {
    hi().then(res => {
      console.log(res)
    })
  }

  return <div>
    <Button type="primary" onClick={download}>下载</Button>
  </div>
}

ReactDOM.render(<App />, mountNode)


