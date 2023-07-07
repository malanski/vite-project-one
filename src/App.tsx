import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';

function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

          <main className={styles.card}>
          <AddTask />
          </main>
          
        </div>

      <footer>
        <p>Developed by <a href="https://malanski.github.io/portfolio/" target='blank' rel='noreferrer'>Ulisses Malanski</a> - 2023</p>
      </footer>
    </div>
  )
}

export default App
