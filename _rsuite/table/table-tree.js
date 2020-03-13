import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Table} from 'rsuite';
// import default style
import 'rsuite/lib/styles/index.less';

const { Column, HeaderCell, Cell, Pagination } = Table;

// or 'rsuite/dist/styles/rsuite-default.css'

const fakeTreeData = [
  {
    "id": "1",
    "labelName": "Car",
    "status": "ENABLED",
    "children": [
      {
        "id": "1-1",
        "labelName": "Mercedes Benz",
        "status": "ENABLED",
        "count": 460
      },
      {
        "id": "1-2",
        "labelName": "BMW",
        "status": "ENABLED",
        "children": [
          {
            "id": "1-2-1",
            "labelName": "2 series",
            "status": "ENABLED",
            "count": 103,
            "children": [
              {
                "id": "1-2-1-1",
                "labelName": "Sporty hatchback",
                "status": "DISABLED",
                "count": 502
              },
              {
                "id": "1-2-1-2",
                "labelName": "Coupe",
                "status": "ENABLED",
                "count": 502
              },
              {
                "id": "1-2-1-3",
                "labelName": "Roadster",
                "status": "DISABLED"
              },
              {
                "id": "1-2-1-4",
                "labelName": "Multi-function wagon",
                "status": "DISABLED"
              },
              {
                "id": "1-2-1-5",
                "labelName": "Station wagon",
                "status": "DISABLED",
                "count": 34
              }
            ]
          },
          {
            "id": "1-2-2",
            "labelName": "The intention of customers",
            "status": "ENABLED",
            "count": 364,
            "children": [
              {
                "id": "1-2-2-1",
                "labelName": "Financial plan",
                "status": "DISABLED"
              },
              {
                "id": "1-2-2-2",
                "labelName": "Appointment test drive",
                "status": "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "labelName": "Game",
    "status": "ENABLED",
    "count": 834,
    "children": [
      {
        "id": "2-1",
        "labelName": "Online game",
        "status": "DISABLED"
      },
      {
        "id": "2-2",
        "labelName": "Mobile game",
        "status": "ENABLED"
      }
    ]
  },
  {
    "id": "3",
    "labelName": "Digital",
    "status": "ENABLED",
    "count": 534,
    "children": [
      {
        "id": "3-1",
        "labelName": "Mobile phone",
        "status": "ENABLED",
        "children": []
      },
      {
        "id": "3-2",
        "labelName": "Computer",
        "status": "DISABLED"
      },
      {
        "id": "3-3",
        "labelName": "Watch",
        "status": "ENABLED"
      }
    ]
  }
]

class TreeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeTreeData
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Table
          isTree
          defaultExpandAllRows
          rowKey="id"
          height={400}
          data={data}
          onExpandChange={(isOpen, rowData) => {
            console.log(isOpen, rowData);
          }}
          renderTreeToggle={(icon, rowData) => {
            if (rowData.children && rowData.children.length === 0) {
              return <Icon icon="spinner" spin />;
            }
            return icon;
          }}
        >
          <Column width={400}>
            <HeaderCell>Label</HeaderCell>
            <Cell dataKey="labelName" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Count</HeaderCell>
            <Cell dataKey="count" />
          </Column>
        </Table>
      </div>
    );
  }
}

ReactDOM.render(<TreeTable />, mountNode);
