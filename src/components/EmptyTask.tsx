import styles from './EmptyTask.module.css';
import clipBoard from '/public/clipboard.png';

export const EmptyTask = () => {
  return (
    <div className={styles.emptyTask}>
      <img src={clipBoard} alt='Clipboard icon'></img>
        <p>
          You have not created any task yet.
        </p>
    </div>
  )
}