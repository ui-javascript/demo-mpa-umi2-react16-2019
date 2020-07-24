import React, {useEffect} from "react"
import ReactDOM from "react-dom"

var data = [
  {
    "id": "1",
    "name": "xxx",
    "state": 0,
    "createTime": "2019/11/18 10:44:00",
    "children": [
      {
        "id": "1_1",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
        "children": [
          {
            "id": "1_1_1",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
          },
          {
            "id": "1_1_2",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
          },
          {
            "id": "1_1_3",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
          }
        ]
      },
      {
        "id": "1_2",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
        "children": [
          {
            "id": "1_2_1",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
          },
          {
            "id": "1_2_2",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
          },
          {
            "id": "1_2_3",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
          }
        ]
      },
      {
        "id": "1_3",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
      }
    ]
  },
  {
    "id": "2",
    "name": "xxx",
    "state": 0,
    "createTime": "2019/11/18 10:44:00",
    "children": [
      {
        "id": "2_1",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
        "children": [
          {
            "id": "2_1_1",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
          },
          {
            "id": "2_1_2",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
          },
          {
            "id": "2_1_3",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
          }
        ]
      },
      {
        "id": "2_2",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
      },
      {
        "id": "2_3",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
      }
    ]
  },
  {
    "id": "3",
    "name": "xxx",
    "state": 0,
    "createTime": "2019/11/18 10:44:00",
    "children": [
      {
        "id": "3_1",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
      },
      {
        "id": "3_2",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
      },
      {
        "id": "3_3",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
      }
    ]
  },
  {
    "id": "4",
    "name": "xxx",
    "state": 0,
    "createTime": "2019/11/18 10:44:00",
  },
  {
    "id": "5",
    "name": "xxx",
    "state": 0,
    "createTime": "2019/11/18 10:44:00",
  }
]



var initTree = () => {
  layui.config({
    base: '/plugins/',   // 模块所在目录
    version: 'v1.5.2' // 插件版本号
  }).extend({
    treeTable: 'treeTable/treeTable',
  }).use(['layer', 'util', 'table', 'treeTable', 'laytpl'], function () {
    var $ = layui.jquery;

    // var layer = layui.layer;
    var util = layui.util;
    // var table = layui.table;
    var treeTable = layui.treeTable;
    // var laytpl = layui.laytpl

    // 渲染表格
    var insTb = treeTable.render({
      elem: '#myTable',
      // url: '/mock/treeTable.json',
      data: data,
      size: 'sm',
      tree: {
        // 折叠图标显示在第几列
        iconIndex: 0,
        // 自定义id字段的名称
        idName: 'id',
        // 自定义标识是否还有子节点的字段名称
        // haveChildName: 'haveChild',
        // 自定义箭头风格
        // arrowType: 'arrow2',
        // 自定义图标
        getIcon: (d) => {

          return ''
          // d是当前行的数据
          // if (d.children) {
          //   return '<i class="layui-icon ew-tree-table-arrow" style="visibility: hidden"></i>';
          // } else {
          //   return `<i class="layui-icon ew-tree-table-arrow"></i> `
          // }
        }
      },
      cols: [
        // { type: 'numbers' },
        // { type: 'checkbox' },
        {field: 'id', title: 'ID'},
        {field: 'name', title: '名称'},
        {
          field: 'createTime',
          title: '创建时间',
          templet: (d) => {
            return util.toDateString(d.createTime);
          },
        },
      ],
    });

    insTb.expandAll();

    // table.on('row(test)', (obj) => {
    //   // 得到当前行元素对象
    //   console.log(obj.tr)
    //   // 得到当前行数据
    //   console.log(obj.data)
    // });

    treeTable.on('row(myTable)', (obj) => {

      var flag = 'DATA_HAS_APPEND_TABLE'
      var $tr = obj.tr

      // 判断当前行是否有可供展开的数据
      var info = $tr.data() || {}
      if (obj.data && !obj.data.children && info.indent != null) {

        $tr.toggleClass('ew-tree-table-open')

        if ($tr.attr(flag)) {
          $tr.next('tr').toggleClass('ew-tree-tb-hide')
          return
        }

        // 标记该行已经追加过表格
        $tr.attr(flag, true)

        var indent = (info.indent + 1) * 21 + 14
        console.log(obj)
        // // 得到当前行元素对象
        // console.log(obj.tr)
        // // 得到当前行数据
        // console.log(obj.data)

        $tr.after($(`<tr data-pid="${obj.data.pid}" data-indent="${info.indent}"><td colspan="3" style="padding: 5px;padding-left: ${indent}px;">

<table class="layui-table" lay-even="" lay-skin="row">
  <colgroup>
    <col width="150">
    <col width="150">
    <col width="200">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th>人物</th>
      <th>民族</th>
      <th>出场时间</th>
      <th>格言</th>
    </tr> 
  </thead>
  <tbody>
    <tr>
      <td>贤心</td>
      <td>汉族</td>
      <td>1989-10-14</td>
      <td>人生似修行</td>
    </tr>
    <tr>
      <td>张爱玲</td>
      <td>汉族</td>
      <td>1920-09-30</td>
      <td>于千万人之中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里…</td>
    </tr>
    <tr>
      <td>Helen Keller</td>
      <td>拉丁美裔</td>
      <td>1880-06-27</td>
      <td> Life is either a daring adventure or nothing.</td>
    </tr>
    <tr>
      <td>岳飞</td>
      <td>汉族</td>
      <td>1103-北宋崇宁二年</td>
      <td>教科书再滥改，也抹不去“民族英雄”的事实</td>
    </tr>
    <tr>
      <td>孟子</td>
      <td>华夏族（汉族）</td>
      <td>公元前-372年</td>
      <td>猿强，则国强。国强，则猿更强！ </td>
    </tr>
  </tbody>
</table>  
         
      </td></tr>`))

      }

    });


    // @fix 允许行冒泡, 修复图标文字的点击问题
    // ew-tree-table-td-single
    $('[lay-filter="myTable"]').find('.ew-tree-tips,.ew-tree-table-td-single,.ew-tree-pack').click(function () {
      var $tr = $(this).parents('tr')
      $tr.click()
    })

  });
}


function App() {

  useEffect(() => {
    initTree()
  }, []);

  return (
    <div>
      <table id="myTable" lay-filter="myTable"></table>
    </div>
  );

}

ReactDOM.render(<App/>, document.getElementById('root'));

