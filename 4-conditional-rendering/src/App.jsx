import Login from './components/Login.jsx'

function App() {

  return (
    <>
      <Login username="Balotiyash" isLoggedin={true}></Login>
      <Login username="AlgoDevs"></Login>
      <Login isLoggedin="true"></Login>
    </>
  )
}

export default App
