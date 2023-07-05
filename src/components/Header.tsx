import styles from './Header.module.css';

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={styles.logoReact} alt="React logo" />
        </a>
    </header>
  )
}