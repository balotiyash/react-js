import React, { useContext } from 'react'
import { NameContext } from './ComponentA'

const ComponentD = () => {

    const name = useContext(NameContext);

    return (
        <div className='box'>
            ComponentD
            <br />
            {`Bye, ${name}`}
        </div>
    )
}

export default ComponentD