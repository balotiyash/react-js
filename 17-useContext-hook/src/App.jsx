// import ComponentA from "./WrongExample/ComponentA"
import ComponentA from "./CorrectExample/ComponentA"


function App() {

    return (
        <>
            {/* Un necessarily passing props one below the other to send it to the last component. This is known as prop drilling */}
            {/* <ComponentA /> */}

            {/* Now we have avoided prop drilling using createContext(), useContext(), import and export functionalities */}
            <ComponentA />
        </>
    )
}

export default App
