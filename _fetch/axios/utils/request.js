import axios from 'axios'
import { message } from "antd"

function download(res) {
  console.log(res)
  const link = document.createElement('a')
  let blob = new Blob([res.data], { type: res.data.type })
  link.style.display = 'none'
  link.href = URL.createObjectURL(blob)
  link.download = "文件名"

  document.body.append(link)
  link.click()
  document.body.removeChild(link)
}

// create an axios instance
const service = axios.create({
  // url = base url + request url
  baseURL: 'http://localhost:8080',
  // send cookies when cross-domain requests
  // withCredentials: true,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    console.log(response.config)

    if (response.request.responseType === 'blob') {
      download(response)
      return
    }

    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      message.error("res.message || 'Error'")

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   // MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //   //   confirmButtonText: 'Re-Login',
      //   //   cancelButtonText: 'Cancel',
      //   //   type: 'warning'
      //   // }).then(() => {
      //   //     location.reload()
      //   // })
      // }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }

  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })

    message.error(error.message)

    return Promise.reject(error)
  }
)

export default service
