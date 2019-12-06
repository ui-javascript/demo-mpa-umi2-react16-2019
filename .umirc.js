const glob = require('glob')
const path = require("path");
const fs = require("fs");

// 配置
import CONFIG from "./config"
// console.log(CONFIG)
let browserPages = []

const port = process.env.PORT || 8000
// console.log('-------端口--------')
// console.log(port)

// console.log('-------环境--------')
// console.log(process.env.NODE_ENV)

function isProd () {
  return process.env.NODE_ENV === 'production'
}

function shouldReadAsEntry(moduleName) {
  // 是否小写字母开头 并且不以use开头
  return moduleName.charAt(0).match(/^.*[a-z]+.*$/) && moduleName.indexOf("use") !== 0
}

function getEntry(globPath) {
  let entries = {}

  glob.sync(globPath).forEach(function (entry) {

    // 切割路径 --> [ '.', '_project', 'module', 'foo.js' ]
    // --> ['_project', 'module', 'foo.js' ]
    // --> ['_project', 'module' ]
    // --> ['module' ]
    let sections = entry.split('/').splice(1)
    // console.log(sections)

    // 模块名称 --> 'foo'
    let moduleName = path.basename(entry, path.extname(entry));
    // console.log(moduleName)

    // 跳过不符合入口规则的文件
    if (!shouldReadAsEntry(moduleName)) {
      return
    }

    // 已获取模块名，sections移除最后一个
    sections.pop()

    // 页面信息
    let infoPath = `./${sections.join('/')}/${moduleName}.json`
    if (!fs.existsSync(infoPath)) {
      infoPath = CONFIG.meta
    }

    let context = JSON.parse(fs.readFileSync(infoPath, "utf-8"))
    // console.log(context)

    // 已获取路径参数, 去掉section的工程名
    sections.shift()

    // 生成唯一id, 防止多个目录下路径重复
    let prefix = ''
    // 除了moduleName与当前文件名前缀是否一致, 且层级为1
    // 其他情况将section串联，作为uuid的一部分
    if (sections.length > 1 ||
      (sections.length === 1 && moduleName.indexOf(sections[0]) !== 0)) {
      prefix = `${sections.join('-')}-`
    }

    let uuid = `${prefix}${moduleName}`
    // console.log(uuid)
    browserPages.push(`http://localhost:${port}/${uuid}.html`)

    entries[uuid] = [entry, {
      context
    }]
  });

  console.log('-------页面--------')
  console.log(browserPages)

  // console.log('-------入口--------')
  // console.log(JSON.stringify(entries).replace(/],/g, "],\n"))

  return {
    entry: entries,
    html: {
      // 默认模板
      template: CONFIG.template,
    },
    // @FIXME 这里添加以后，页面会无法正常显示??
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
  };
}



let mpaConfig = getEntry(CONFIG.entry);

// @TODO 向html注入参数
// if (!isProd()) {
//   for (let index in mpaConfig.entry) {
//     Object.assign(mpaConfig.entry[index], {
//       _browserPage: browserPages,
//     })
//   }
// }

export default {
  plugins: [
    // @TODO 打包配置相关
    // ['./dist/index', {
    //   splitChunks: true,
    // }],

    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        // @FIXME umi-locale与react-intl在一些地方会有冲突
        // locale: {
        //   // default false
        //   enable: true,
        //   // default zh-CN
        //   default: 'zh-CN',
        //   // default true, when it is true, will use `navigator.language` overwrite default
        //   baseNavigator: true,
        // },
      },

    ],

    // 多页面配置
    ['umi-plugin-mpa', mpaConfig],
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
  ],
  extraBabelPlugins: [
    // styled-components支持
    "babel-plugin-styled-components"
  ],
};
