import request from '../utils/request'

export function hi() {
  return request({
    url: '/upload/download?url=/table_1-1573606665662.xls',
    method: 'get',
    responseType: "blob",
    // downloadName: 'HAPPY',
    // @FIXME 无法传参??
    _downloadName: '模板.xlsx'
  })
}
