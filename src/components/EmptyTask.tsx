import styles from './EmptyTask.module.css';

export const EmptyTask = () => {
  return (
    <div className={styles.emptyTask}>
        <p>
          You have not created any task yet.
        </p>
    </div>
  )
}