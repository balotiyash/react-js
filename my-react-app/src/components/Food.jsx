import React from 'react'

const Food = () => {

    const FOOD1 = "Orange"
    const FOOD2 = "Banana"

    return (
        <ul>
            <li>Apple</li>
            <li>{FOOD1}</li>
            <li>{FOOD2.toUpperCase()}</li>
        </ul>
    )
}

export default Food