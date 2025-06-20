import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    return (
        <div>
            <p> {count} </p>
            <button onClick={handleClick}>Hit me</button>
        </div>
    )
}

export default Counter