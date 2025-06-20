import React, { useState } from 'react'

const Car = () => {

    const [car, setCar] = useState({
        year: 2024,
        make: "Jaguar Land Rover",
        model: "F-TYPE"
    });

    const handleYear = (event) => {
        setCar(c => ({...c, year: event.target.value}));
    }

    const handleMake = (event) => {
        setCar(c => ({...c, make: event.target.value}));
    }

    const handleModel = (event) => {
        setCar(c => ({...c, model: event.target.value}));
    }

    return (
        <div>
            I Love {car.year} {car.make} {car.model}
            <br />
            <input type="number" value={car.year} onChange={handleYear} />
            <input type="text" value={car.make} onChange={handleMake} />
            <input type="text" value={car.model} onChange={handleModel} />
        </div>
    )
}

export default Car