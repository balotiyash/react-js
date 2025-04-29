import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Resizer = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // But this will execute every time unnecessarily
    // window.addEventListener("resize", measure);

    useEffect(() => {
        window.addEventListener("resize", measure);
        return() => {
            window.removeEventListener("resize", measure);
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])

    function measure() {
        setWidth(w => window.innerWidth);
        setHeight(w => window.innerHeight);
    }

    return (
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    )
}

export default Resizer