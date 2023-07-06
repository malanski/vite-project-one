import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
import { AddTask } from './components/addtask';

function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <main className={styles.card}>

        <AddTask />

        </main>

      </div>
    </div>
  )
}

export default App
