import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({initialCount = 0}) {
    const [count, setCount] = useState(initialCount);

    return (
        <>
            Count : {count}

            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    )
}

ReactDOM.render(
    <Counter />, document.getElementById('root')
)