import { useState } from 'react';
import styles from './InfoTask.module.css';

interface InfoTaskProps {
  tasks: string[];
}

const InfoTask = ({ tasks }: InfoTaskProps) => {
  const [checkedTasks, setCheckedTasks] = useState<number[]>([]);

  const handleCheckboxChange = (index: number) => {
    if (checkedTasks.includes(index)) {
      setCheckedTasks((prevCheckedTasks) =>
        prevCheckedTasks.filter((taskIndex) => taskIndex !== index)
      );
    } else {
      setCheckedTasks((prevCheckedTasks) => [...prevCheckedTasks, index]);
    }
  };

  const handleDeleteTask = (index: number) => {
    tasks.splice(index, 1);
    setCheckedTasks((prevCheckedTasks) =>
      prevCheckedTasks.filter((taskIndex) => taskIndex !== index)
    );
  };

  return (
    <div className={styles.InfoTasks}>
      {tasks.map((task, index) => (
        <label className={styles.InfoTaskContainer} key={index}>
          <input
            className={styles.checkBox}
            type="checkbox"
            title='Check mark this task'
            checked={checkedTasks.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />
          <span

            style={{
              width: '300px',
              marginLeft: '20px',
              textDecoration: checkedTasks.includes(index) ? 'line-through' : 'none'
            }}
          >
            {task}
          </span>
          <button
            title='Delete this task'
            className={styles.taskDelete}
            onClick={() => handleDeleteTask(index)}
          >
            X
          </button>
        </label>
      ))}
    </div>
  );
};

export default InfoTask;
