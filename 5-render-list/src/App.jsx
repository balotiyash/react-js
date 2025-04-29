import List from './List'

function App() {
    const fruits = [
        { id: 1, name: "apple", calories: 135 },
        { id: 2, name: "mango", calories: 15 },
        { id: 3, name: "banana", calories: 12 },
        { id: 4, name: "orange", calories: 35 },
        { id: 5, name: "coconut", calories: 15 },
        { id: 6, name: "pineapple", calories: 25 }
    ]
    
    const vegitables = [
        { id: 7, name: "potato", calories: 135 },
        { id: 8, name: "tomato", calories: 15 },
        { id: 9, name: "corn", calories: 12 },
        { id: 10, name: "lady finger", calories: 35 },
        { id: 11, name: "cauliflower", calories: 15 },
        { id: 12, name: "broccoli", calories: 25 }
    ]

    return (
        <>
            {fruits.length > 0 && <List items={fruits} category="Fruits" ></List>}
            {vegitables.length > 0 && <List items={vegitables} category="Vegitables" ></List>}
        </>
    )
}

export default App
