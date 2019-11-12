# README

基于umi-plugin-mpa简单配置一下

# 使用

- 视图模板: 找和entry同名的.ejs文件，若不存在则使用默认模板(./public/template.ejs)
- cdn模板的末尾挂载

```js
// template-cdn.ejs 已经引入了React + ReactDOM + antd.css
ReactDOM.render(<Button type="primary" icon="plus" />, mountNode);
```

# TODO

- 打包优化
- tailwindcss
- 路由相关功能调整

# FIXME

- 与cdn-reactdom版本混用，界面空白 --> 暂时对文件名加'-cdn'区别一下
- (0 , _hooks.default) is not a function --> js没问题,ts/tsx报错 --> 缺少配置??

