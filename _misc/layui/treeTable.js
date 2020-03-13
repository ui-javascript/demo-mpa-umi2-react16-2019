import React, {useEffect} from "react"
import ReactDOM from "react-dom"

const data = [
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
            "children": []
          },
          {
            "id": "1_1_2",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
            "children": []
          },
          {
            "id": "1_1_3",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
            "children": []
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
            "children": []
          },
          {
            "id": "1_2_2",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
            "children": []
          },
          {
            "id": "1_2_3",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
            "children": []
          }
        ]
      },
      {
        "id": "1_3",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
        "children": []
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
            "children": []
          },
          {
            "id": "2_1_2",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
            "children": []
          },
          {
            "id": "2_1_3",
            "name": "xxx",
            "state": 0,
            "createTime": "2019/11/18 10:44:00",
            "children": []
          }
        ]
      },
      {
        "id": "2_2",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
        "children": []
      },
      {
        "id": "2_3",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
        "children": []
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
        "children": []
      },
      {
        "id": "3_2",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
        "children": []
      },
      {
        "id": "3_3",
        "name": "xxx",
        "state": 0,
        "createTime": "2019/11/18 10:44:00",
        "children": []
      }
    ]
  },
  {
    "id": "4",
    "name": "xxx",
    "state": 0,
    "createTime": "2019/11/18 10:44:00",
    "children": []
  },
  {
    "id": "5",
    "name": "xxx",
    "state": 0,
    "createTime": "2019/11/18 10:44:00",
    "children": []
  }
]

function App() {

  useEffect(() => {

    layui.use(['layer', 'util', 'treeTable', 'laytpl'], function () {
      var $ = layui.jquery;
      var layer = layui.layer;
      var util = layui.util;
      var treeTable = layui.treeTable;
      var laytpl = layui.laytpl

      // 渲染表格
      var insTb = treeTable.render({
        elem: '#myTable',
        // url: '/mock/treeTable.json',
        data: data,
        tree: {
          // 折叠图标显示在第几列
          iconIndex: 0,
          // 自定义id字段的名称
          idName: 'id',
          // 自定义标识是否还有子节点的字段名称
          haveChildName: 'haveChild'
        },
        cols: [
          // {type: 'numbers'},
          // {type: 'checkbox'},
          {field: 'id', title: 'ID'},
          {field: 'name', title: '名称'},
          {
            field: 'createTime',
            title: '创建时间',
            templet: function (d) {
              return util.toDateString(d.createTime);
            },
          },
        ],
      });

      insTb.expandAll();

      treeTable.on('row(test)', function(obj) {
        // 得到当前行元素对象
        console.log(obj.tr)
        // 得到当前行数据
        console.log(obj.data)
      });


    });

  }, []);


  return (
    <div>

      <table id="myTable"></table>

    </div>
  );
}

ReactDOM.render(<App/>, mountNode);

