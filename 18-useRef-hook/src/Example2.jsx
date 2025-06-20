import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const Example2 = () => {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rerendered");
    })

    const handleClick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }

    return (
        <div>
            <button onClick={handleClick1}>Change1</button>
            <input type="text" ref={inputRef1} />
            
            <button onClick={handleClick2}>Change2</button>
            <input type="text" ref={inputRef2} />

            <button onClick={handleClick3}>Change3</button>
            <input type="text" ref={inputRef3} />

        </div>
    )
}

export default Example2