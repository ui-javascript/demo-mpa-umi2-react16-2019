import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useEventCallback } from "rxjs-hooks";
import { map, withLatestFrom, combineLatest } from "rxjs/operators";


function App() {
    const [count, setCount] = useState(0);
    const [clickCallback, [description, x, y, prevDesc]] = useEventCallback(
        (event$, inputs$, state$) =>
            event$.pipe(
                map(event => [event.target.innerHTML, event.clientX, event.clientY]),
                combineLatest(inputs$),
                withLatestFrom(state$),
                map(([eventAndInput, state]) => {
                    const [[text, x, y], [count]] = eventAndInput;
                    const prevDescription = state[0];
                    return [text, x + count, y + count, prevDescription];
                })
            ),
        ["nothing", 0, 0, "nothing"],
        [count]
    );

    return (
        <div className="App">
            <h1>
                click position: {x}, {y}
            </h1>
            <h1>"{description}" was clicked.</h1>
            <h1>"{prevDesc}" was clicked previously.</h1>
            <button onClick={clickCallback}>click me</button>
            <button onClick={clickCallback}>click you</button>
            <button onClick={clickCallback}>click him</button>
            <div>
                <p>
                    click buttons above, and then click this `+++` button, the position
                    numbers will grow.
                </p>
                <button onClick={() => setCount(count + 1)}>+++</button>
            </div>
        </div>
    );
}


ReactDOM.render(<App />, mountNode);

