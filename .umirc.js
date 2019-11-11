const glob = require('glob')
const path = require("path");
const fs = require("fs");

// 配置
import config from "./config"
// console.log(config)

// 是否小写字母开头
function shouldReadAsEntry(moduleName) {
  return moduleName.charAt(0).match(/^.*[a-z]+.*$/)
}

function getEntry(globPath) {
  let entries = {}


  glob.sync(globPath).forEach(function (entry) {
 
    // 切割路径 --> [ '.', 'pages', 'foo.js' ]
    let sections = entry.split('/').splice(-3)
    // console.log(sections)

    // 模块名称 --> 'foo'
    let moduleName = path.basename(entry, path.extname(entry));
    // console.log(moduleName)

    // 跳过不符合入口规则的文件
    if (!shouldReadAsEntry(moduleName)) {
      return 
    }

    // 生成唯一id, 防止多个目录下路径重复
    sections.shift()
    sections.pop()
    let uuid = `${sections.join('-')}-${moduleName}`
    // console.log(uuid)

    // 模板路径
    let templatePath = `./${sections[0]}/${sections[1]}/${moduleName}.html`
    if (!fs.existsSync(templatePath)) {
      templatePath = "./public/template.html"
    }
    // console.log(templatePath)


    // 页面信息
    let infoPath = `./${sections[0]}/${sections[1]}/${moduleName}.json`
    if (!fs.existsSync(infoPath)) {
      infoPath = "./public/template.json"
    }

    let context = JSON.parse(fs.readFileSync(infoPath, "utf-8"))
    // console.log(context)
    // entries[moduleName] = [entry, { context }]
    entries[uuid] = [entry, { context }]
  });

  console.log(entries)

  return {
    entry: entries,
    html: {},
  };
}


export default {
  plugins: [
    // ['./dist/index', {
    //   splitChunks: true,
    // }],

    // example =========
    // ['umi-plugin-mpa', {
    //   entry: {
    //     foo: [
    //       './pages/foo.js',
    //       {
    //         context: { title: '首页' }
    //       },
    //     ],
    //   },
    //   html: {},
    // }],
    [
      'umi-plugin-react',
      {
        antd: true,
      },
    ],
    ['umi-plugin-mpa', getEntry(config.entry)]
  ],
};
