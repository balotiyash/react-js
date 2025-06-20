import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const Example3 = () => {

    const count = useRef(0);

    useEffect(() => {
        console.log("Component Rerendered");
    })

    const handleClick = () => {
        count.current++;
        console.log(count.current)
    }

    return (
        <div>
            <button onClick={handleClick} >Click ME</button>
        </div>
    )
}

export default Example3