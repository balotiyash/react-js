import React, { useState } from 'react'

const Foods = () => {

    const [foods, setFoods] = useState(["Apple", "Mango", "Banana"]);

    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = '';
        setFoods(f => [...f, newFood]);
        console.log(foods)
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>Food List</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)} >{food}</li>)}
            </ul>
            <input type="text" placeholder="Enter Food Name" id="foodInput" />
            <button onClick={handleAddFood}>Add</button>
        </div>
    )
}

export default Foods