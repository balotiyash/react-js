import React, { useState } from 'react'

const MyComponent = () => {

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const changeName = () => setName('Yash');

    const changeAge = () => setAge(age + 1);

    const changeStatus = () => setIsEmployed(!isEmployed);

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={changeName}>Change Name</button>
            <br /><br />

            <p>Age: {age}</p>
            <button onClick={changeAge}>Increment Age</button>
            <br /><br />

            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={changeStatus}>Change Status</button>
            <br /><br />
        </div>
    )
}

export default MyComponent