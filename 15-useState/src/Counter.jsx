import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count]);

    function add() {
        setCount(c => c + 1)
    }

    function sub() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={sub}>Sub</button>
            &nbsp;
            <button onClick={add}>Add</button>
            <br /><br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default Counter