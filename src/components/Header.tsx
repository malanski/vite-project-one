import styles from './Header.module.css';

import reactLogo from '../assets/react.svg'
import viteLogo from '/public/vite.svg'

export const Header = () => {
  return (
    <header className={styles.myHeader}>
      <img src={viteLogo} className={styles.logo} alt="Vite logo" ></img>
      <div className={styles.typography}>
        <div className={styles.blue}>To</div>
        <div className={styles.purple}>do</div>
      </div>
      <img src={reactLogo} className={styles.logoReact} alt="React logo" ></img>
    </header>
  )
}