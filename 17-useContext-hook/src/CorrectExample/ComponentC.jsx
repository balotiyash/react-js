import React, { useContext } from 'react'
import ComponentD from './ComponentD'
import { NameContext } from './ComponentA'

const ComponentC = () => {

    const name = useContext(NameContext);

    return (
        <div className='box'>
            ComponentC
            <br />
            {`Welcome again, ${name}`}
            <ComponentD />
        </div>
    )
}

export default ComponentC