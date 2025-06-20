import React from 'react'
import PropTypes from 'prop-types'

const List = (props) => {
    // array of string
    // const fruits = ["apple", "mango", "banana", "orange", "coconut", "pineapple"]
    // fruits.sort()
    // const listItems = fruits.map(fruit => <li>{fruit}</li>)

    // Array of  objects
    // const fruits = [
    //     {id: 1, name: "apple", calories: 135},
    //     {id: 2, name: "mango", calories: 15},
    //     {id: 3, name: "banana", calories: 12},
    //     {id: 4, name: "orange", calories: 35},
    //     {id: 5, name: "coconut", calories: 15},
    //     {id: 6, name: "pineapple", calories: 25}
    // ]

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetically
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Descending
    // fruits.sort((a, b) => a.calories - b.calories); // Numbers Ascending
    // fruits.sort((a, b) => b.calories - a.calories); // Numbers Descending

    // filter
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    // Replace lowCalFruits / fruits / highCalFruits
    // const listItems = highCalFruits.map(fruit => <li key={fruit.id}> {fruit.name} &nbsp; <b>{fruit.calories}</b></li>)


    // Using Props for re usability
    const category = props.category;
    const itemLists = props.items;
    const listItems = itemLists.map(item => <li key={item.id}> {item.name} &nbsp; <b>{item.calories}</b></li>)

    return (
        <>
            <h3>{category}</h3>
            <ol> {listItems} </ol>
        </>
    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        })
    )
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List