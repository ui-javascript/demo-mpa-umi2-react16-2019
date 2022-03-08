import ReactDOM from 'react-dom'

import CircularProgress from "@chakra-ui/core/dist/CircularProgress";


function App() {
  return (
    <div>
      <CircularProgress isIndeterminate color="green"></CircularProgress>
    </div>
  );
}

ReactDOM.render(<App />, mountNode);

