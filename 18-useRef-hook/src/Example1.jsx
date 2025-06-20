import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Example1 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component Rerendered");
    })

    const handleClick = () => {
        setCount(c => c + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}

export default Example1