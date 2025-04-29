import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const increment = () => setCount(count + 1);

    return (
        <>
            <p>{count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Counter