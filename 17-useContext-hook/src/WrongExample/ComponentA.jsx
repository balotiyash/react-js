import React, { useState } from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {

    const [name, setName] = useState("Algodevs");

    return (
        <div className='box'>
            ComponentA
            <br />
            {`Hello, ${name}`}
            <ComponentB name={name} />
        </div>
    )
}

export default ComponentA