// import * as React from 'react';
// import {
//     render as renderAmis
// } from 'amis';
//
// class App extends React.Component<any, any> {
//     render() {
//         return (
//             <div>
//                 <p>通过 amis 渲染页面</p>
//                 {renderAmis({
//                     // schema
//                     // 这里是 amis 的 Json 配置。
//                     type: 'page',
//                     title: '简单页面',
//                     body: '内容'
//                 }, {
//                     // props
//                 }, {
//                     // env
//                     // 这些是 amis 需要的一些接口实现
//                     // 可以参考本项目里面的 Demo 部分代码。
//
//                     updateLocation: (location: string/*目标地址*/, replace: boolean/*是replace，还是push？*/) => {
//                         // 用来更新地址栏
//                     },
//
//                     jumpTo: (location: string/*目标地址*/) => {
//                         // 页面跳转， actionType:  link、url 都会进来。
//                     },
//
//                     fetcher: ({
//                                   url,
//                                   method,
//                                   data,
//                                   config
//                               }: {
//                         url: string/*目标地址*/,
//                         method: 'get' | 'post' | 'put' | 'delete'/*发送方式*/,
//                         data: object | void/*数据*/,
//                         config: object/*其他配置*/
//                     }) => {
//                         // 用来发送 Ajax 请求，建议使用 axios
//                     },
//                     notify: (type: 'error' | 'success'/**/, msg: string/*提示内容*/) => {
//                         // 用来提示用户
//                     },
//                     alert: (content: string/*提示信息*/) => {
//                         // 另外一种提示，可以直接用系统框
//                     },
//                     confirm: (content: string/*提示信息*/) => {
//                         // 确认框。
//                     }
//                 })
//                 }
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<App/>, mountNode)