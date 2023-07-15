import { useContext, useState } from 'react';
import styles from './InfoTask.module.css';
import { AppContext } from '../context/AppContext';

interface TaskProps {
  task: string;
  index: number;
  checked: boolean;
}

export const TaskItem: React.FC<TaskProps> = ({ task, index }: TaskProps) => {
  const [taskIsCompleted, setTaskIsCompleted] = useState(false);
  const context = useContext(AppContext);

  const handleCheckboxChange = () => {
    setTaskIsCompleted(!taskIsCompleted);

    if (taskIsCompleted) {
      context.removeCompletedTaskIndex(index);
    } else {
      context.addCompletedTaskIndex(index);
    }
  };

  const handleDeleteTask = () => {
    context.deleteTask(index);
  };

  return (
    <label className={styles.InfoTaskContainer}>
      <input
        type="checkbox"
        title="Check mark this task"
        checked={taskIsCompleted}
        onChange={handleCheckboxChange}
      />
      <span
        style={{
          width: '100%',
          marginLeft: '20px',
          opacity: taskIsCompleted ? '0.7' : '1',
          textDecoration: taskIsCompleted ? 'line-through' : 'none'
        }}
      >
        {task}
      </span>
      <button
        title="Delete this task"
        className={styles.taskDelete}
        onClick={handleDeleteTask}
      >
        X
      </button>
    </label>
  );
};


