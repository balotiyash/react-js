import React, { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState('#000000');

    let style = {
        width: "250px",
        height: "250px",
        border: "2px solid white",
        backgroundColor: color,
        transition: "0.5s ease"
    }

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div>
            <h2>ColorPicker</h2>
            <div style={style} ></div>
            <br />
            <input type="color" value={color} onChange={handleColorChange} />
            <p>Color: {color} </p>
        </div>
    )
}

export default ColorPicker