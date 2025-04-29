import Student from './components/Student Info/Student'

function App() {

  return (
    <>
      <Student name="Yash Balotiya" age={22} isStudent={false}></Student>
      <Student name="Neha Balotia" age={19} isStudent={true}></Student>
      <Student name="Anu Balotiya" age={"16"} isStudent={false}></Student>
      <Student></Student>
    </>
  )
}

export default App
