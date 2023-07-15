import { useContext } from 'react';
import styles from './InfoTask.module.css';
import { AppContext } from '../context/AppContext';
import { TaskItem } from './TaskItem';

const InfoTaskList = () => {
  const context = useContext(AppContext);
  const amountTasksCreated = context.tasks.length;
  const amountTasksCompleted = context.completedTaskIndices.length;

  return (
    <div className={styles.InfoTasks}>
      <div className={styles.tasksCounter}>
        <h4>
          Created Tasks:&ensp;
          <span className={styles.createdNum}>{amountTasksCreated}</span>
        </h4>
        <h4>
          Completed Tasks:&ensp;
          <span className={styles.completedNum}>{amountTasksCompleted}</span>
        </h4>
      </div>

      <hr />

    </div>
  );
};

export default InfoTaskList;