import {Button, TimePicker} from "antd"

import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

function App() {
  return (
    <div>
    <Button type="primary" icon="plus">Demo</Button>

      <div className={"mt-5"}>
        <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, mountNode);

