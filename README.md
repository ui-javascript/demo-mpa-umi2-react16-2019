# README

基于umi-plugin-mpa简单配置一下

# 使用

- 默认使用引入部分cdn的视图模板(./template/template-cdn.ejs ), 挂载节点-示例如下(./_demo/index.js)

```js
// 已经引入了 React + ReactDOM + antd.css
// 但antd组件还是需要按需引入
import {Button} from "antd"

function App() {
  return (
    <Button type="primary" icon="plus">Demo</Button>
  );
}
ReactDOM.render(<App />, mountNode);
```

- 自定义模板: 和entry同名的.ejs文件，若存在会覆盖默认模板, 优先级更高

- 若不创建index.js，umi-plugin-mpa会自动生成url索引页(index.html)

# TODO

- 打包优化
- tailwindcss
- 路由相关功能调整
- admin`简单`骨架

# FIXME

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

- 与cdn版本混用，打包会导致界面空白 ?? --> 莫名其妙好了... @ignore
