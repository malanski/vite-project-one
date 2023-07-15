import styles from './App.module.css';
import './global.css';
import { Header  } from './components/Header';
import { Home } from './pages/home';
import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <Header />
      <div className={styles.wrapper}>

          <main className={styles.card}>
          <Home />
          </main>
          
        </div>

      <footer>
        <p>Developed by <a href="https://malanski.github.io/portfolio/" target='blank' rel='noreferrer'>Ulisses Malanski</a> - 2023</p>
      </footer>
    </AppContextProvider>
  )
}

export default App
