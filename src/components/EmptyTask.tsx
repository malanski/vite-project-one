import styles from './EmptyTask.module.css';
import clipBoard from '../assets/clipboard.png';

export const EmptyTask = () => {
  return (
    <div className={styles.emptyTask}>

      {/* <div className={styles.tasksCounter}>
        <h4>Created Tasks:&ensp; 
          <span className={styles.createdNum}>
          0
        </span>
        </h4>

        <h4>Completed Tasks:&ensp;
          <span className={styles.completedNum}>
          0
        </span>
        </h4>
      </div> */}
      <img src={clipBoard} alt='Clipboard icon'></img>
        <p>
          You have no tasks registered yet<br></br>
          Create tasks and organize your to-do items 
        </p>
    </div>
  )
}