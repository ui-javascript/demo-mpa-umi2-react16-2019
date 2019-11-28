import React from "react"
import ReactDOM from "react-dom"

import useClipboard from "react-use-clipboard";

function App() {
  const [isCopied, setCopied] = useClipboard("我是被复制的文字");

  return (
    <button onClick={setCopied}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
