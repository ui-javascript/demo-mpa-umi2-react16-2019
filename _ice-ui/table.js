import { Table } from '@alifd/next';

import '@alifd/next/reset.scss';
import '@alifd/next/index.scss';


const dataSource = [{id: 1, time: '2016'}];
ReactDOM.render(
  <Table dataSource={dataSource}>
    <Table.Column title="Id" dataIndex="id"/>
    <Table.Column title="Time" dataIndex="time"/>
  </Table>, mountNode);
