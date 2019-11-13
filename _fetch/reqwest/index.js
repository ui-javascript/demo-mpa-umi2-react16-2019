import {message} from "antd"
import reqwest from 'reqwest';

// reqwest({
//   url: 'http://localhost:8080/demo/upload/download?url=/table_1-1573606665662.xls',
//   method: 'get',
//   success: (res) => {
//     console.log(res)
//     message.success('upload successfully.');
//   },
//   error: () => {
//     message.error('download failed.');
//   },
// });


$.ajax({
  async: false,
  url: "http://localhost:8080/demo/upload/download?url=/table_1-1573606665662.xls",
  type: "GET",
  success: function (json) {
    debugger
    console.log(json)
  }
});
