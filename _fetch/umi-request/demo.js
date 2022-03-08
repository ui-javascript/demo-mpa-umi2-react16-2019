import react, { useEffect } from "react"
import ReactDOM from "react-dom"
import axios from 'axios'
import request from 'umi-request'

function App() {

  useEffect(() => {
    // request.get("/mock/data-strange.json").then((res) => {
    //   debugger
    // })

    // @TODO chrome-v.80 会报错 --> 网页奔溃 !!!
    // axios.get("/mock/data-strange.json").then((res) => {
    //   debugger
    // })

    $.ajax({
      url: '/mock/data-crash.json',
      method: 'GET',
      success: (res) => {
        console.log(res)
        JSON.parse(res)

        debugger
      }
    })

  });


  return (
    <div>
      发送请求
    </div>
  );
}

ReactDOM.render(<App />, mountNode);

