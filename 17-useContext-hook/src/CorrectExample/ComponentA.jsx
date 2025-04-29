import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const NameContext = createContext();

const ComponentA = () => {

    const [name, setName] = useState("Algodevs");

    return (
        <div className='box'>
            ComponentA
            <br />
            {`Hello, ${name}`}

            <NameContext.Provider value={name} >
                <ComponentB name={name} />
            </NameContext.Provider>
        </div>
    )
}

export default ComponentA