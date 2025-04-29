import React from 'react'

const ComponentD = (props) => {
    return (
        <div className='box'>
            ComponentD
            <br />
            {`Bye, ${props.name}`}
        </div>
    )
}

export default ComponentD