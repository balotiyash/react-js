import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);

  // Function to handle the API call when the count is updated
  const handleClick = async () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;

      // Send the count value to the backend using axios
      axios.post('http://localhost/react-test/update-count.php', {
        count: newCount
      })
      .then(response => {
        console.log('Count updated successfully', response);
      })
      .catch(error => {
        console.error('Error updating count', error);
      });

      return newCount;
    });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
