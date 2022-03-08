import styles from './style.less';

function onChange(time, timeString) {
  console.log(time, timeString);
}

// https://juejin.im/post/6844904024240586760
function App() {
  return (
      <div className={styles['out-rect']}>
        <div className={styles['in-rect']}></div>
      </div>
  );
}

ReactDOM.render(<App />, mountNode);

