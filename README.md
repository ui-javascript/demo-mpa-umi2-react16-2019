# README

基于umi-plugin-mpa简单配置一下

# 使用

- 视图模板: 找和entry同名的.ejs文件，若不存在则使用默认模板(./public/template.ejs)
- cdn视图模板挂载节点-示例

```js
// template-cdn.ejs 已经引入了 React + ReactDOM + antd.css
import {Button} from "antd"
ReactDOM.render(<Button type="primary" icon="plus" />, mountNode);
```

# TODO

- 打包优化
- tailwindcss
- 路由相关功能调整

# FIXME

- cdn-reactdom版本混用，导致界面空白 

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

