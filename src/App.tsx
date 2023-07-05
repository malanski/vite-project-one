import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [checkboxes, setCheckboxes] = useState([false, false]); // Initialize with as many false values as the number of checkboxes

  const handleCheckboxChange = (index: number) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((isChecked, i) => (i === index ? !isChecked : isChecked))
    );
  };

  return (
    <>
      <header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      <h1>Vite + React</h1>

      <div className="card">

        <label className="check-box">
          <button className="check-input">
            <input
              type="checkbox"
              checked={checkboxes[0]}
              onChange={() => handleCheckboxChange(0)}
            />
            <span 
              style={{ textDecoration: checkboxes[0] ? 'line-through' : 'none',
                background: checkboxes[0] ? '#323a3a' : 'none'  }}>
              &ensp;Clique para riscar o conteúdo do texto a ser escrito de maneira longa.
            </span>
          </button>
        </label>

        <label className="check-box">
          <button className="check-input">
            <input
              type="checkbox"
              checked={checkboxes[1]}
              onChange={() => handleCheckboxChange(1)}
            />
            <span 
              style={{ textDecoration: checkboxes[1] ? 'line-through' : 'none',
                background: checkboxes[1] ? '#323a3a' : 'none'  }}>
              &ensp;Clique para riscar o conteúdo do texto a ser escrito de maneira longa.
            </span>
          </button>
        </label>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App