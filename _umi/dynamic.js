import dynamic from 'umi/dynamic'

import { Button } from "antd"

const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
const App = dynamic({
  loader: async function() {
    await delay(/* 2s */2000);
    return () => <Button type="primary">I am coming after 2s</Button>;
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

