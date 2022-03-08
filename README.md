# README

基于umi-plugin-mpa简单配置一下

# 使用

- nodejs: `v12.13.0`
- 默认使用视图模板(./template/template-cdn.ejs ), 使用示例如下

```js
// cdn已经引入React + ReactDOM + antd.css 
// 但antd组件还是需要按需引入
import {Button} from "antd"

function App() {
  return (
    <Button type="primary" icon="plus">Demo</Button>
  );
}
ReactDOM.render(<App />, mountNode);
```

- 入口js: 开头为小写字母且不是`use`的js文件 --> 在config/index.js进行路径匹配
- 如果创建和js同名的`.ejs`文件，优先级更高，会覆盖默认模板 --> umi-plugin-mpa实现
- 如果不创建`index.js`入口，umi-plugin-mpa会默认生成index.html(`url导航`)
- 使用到`react-hooks`功能的部分, 需要引入react-dom, 否则估计会报错!! 

# TODO

- 打包优化
- tailwindcss
- 路由功能调整
- admin`简单骨架`

# FAQ

- scss Module build failed

```
使用 sass 时需在项目目录安装 node-sass 和 sass-loader 依赖
```

- 打包配置出错

```java
// @FIXME 这里不能添加，页面会无法正常显示!!
// splitChunks: {
//   cacheGroups: {
//     vendors: {
//       chunks: 'all',
//       minChunks: 2,
//       name: 'vendors',
//       test: /[\\/]node_modules[\\/]/,
//     },
//   },
// },
```

- (0 , _hooks.default) is not a function --> js没问题,ts/tsx报错 --> 缺少配置??

- 关于`react-table`: Uncaught TypeError: (0 , _reactTable.useTable) is not a function
    https://github.com/tannerlinsley/react-table/issues/1457

```
"react-table": "^6.10.0" -->
"react-table": "next",
```

- 与cdn版本混用，打包会导致界面空白 ?? --> 莫名其妙好了... @ignore
