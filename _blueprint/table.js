import { Cell, Column, Table } from "@blueprintjs/table";

// https://github.com/palantir/blueprint/blob/develop/packages/docs-app/src/index.scss
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/table/lib/css/table.css";

const cellRenderer = (rowIndex) => {
  return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
};

function App() {
  return (
    <div>
      <Table numRows={10}>
        <Column name="Dollars" cellRenderer={cellRenderer}/>
      </Table>
    </div>
  );
}

ReactDOM.render(<App />, mountNode);

