import { useState } from 'react';
import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
function App() {
  const [checkboxes, setCheckboxes] = useState([false, false, false]); // Initialize with as many false values as the number of checkboxes

  const handleCheckboxChange = (index: number) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((isChecked, i) => (i === index ? !isChecked : isChecked))
    );
  };

  return (
    <div>
      <Header />
      <h1>Vite + React</h1>
      <div className={styles.wrapper}>

        <main className={styles.card}>

          <label className={styles.checkBox}>
            <button className={styles.checkInput}>
              <input
                type="checkbox"
                checked={checkboxes[0]}
                onChange={() => handleCheckboxChange(0)}
              />
              <span
                style={{
                  textDecoration: checkboxes[0] ? 'line-through' : 'none',
                  background: checkboxes[0] ? '#323a3a' : 'none'
                }}>
                &ensp;Clique para riscar o conteúdo do texto a ser escrito de maneira longa.
              </span>
            </button>
          </label>

          <label className={styles.checkBox}>
            <button className={styles.checkInput}>
              <input
                type="checkbox"
                checked={checkboxes[1]}
                onChange={() => handleCheckboxChange(1)}
              />
              <span
                style={{
                  textDecoration: checkboxes[1] ? 'line-through' : 'none',
                  background: checkboxes[1] ? '#323a3a' : 'none'
                }}>
                &ensp;Clique para riscar o conteúdo do texto a ser escrito de maneira longa.
              </span>
            </button>
          </label>

          <label className={styles.checkBox}>
            <button className={styles.checkInput}>
              <input
                type="checkbox"
                checked={checkboxes[2]}
                onChange={() => handleCheckboxChange(2)}
              />
              <span
                style={{
                  textDecoration: checkboxes[2] ? 'line-through' : 'none',
                  background: checkboxes[2] ? '#323a3a' : 'none'
                }}>
                &ensp;Clique para riscar o conteúdo do texto a ser escrito de maneira longa.
              </span>
            </button>
          </label>

    
        </main>

        <p className={styles.docs}>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
