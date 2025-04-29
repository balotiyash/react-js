import React from 'react'

const Button = () => {

    const handleClick = () => console.log("OUCH!");
    const handleClick2 = (name) => console.log(`${name}, stop clicking me!`);

    let count = 0;
    const handleClick3 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name}, you clicked me ${count} time/s`);
        } else {
            console.log(`${name}, stop clicking me`);
        }
    }

    const handleClick4 = (e) => e.target.textContent = "OUCH";

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <br /><br />

            <button onClick={() => handleClick2('Yash')}>Click Me</button>
            <br /><br />

            <button onClick={() => handleClick3('Yash')}>Click Me</button>
            <br /><br />

            <button onClick={(e) => handleClick4(e)}>Click Me</button>
            <br /><br />
        </>
    )
}

export default Button