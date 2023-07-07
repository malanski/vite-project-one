import { useState } from 'react';
import styles from './InfoTask.module.css';
import Task from './Task';

interface InfoTaskListProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
}

const InfoTaskList = ({ tasks, onDeleteTask }: InfoTaskListProps) => {
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
    onDeleteTask(index);
    setCheckedTasks((prevCheckedTasks) =>
      prevCheckedTasks.filter((taskIndex) => taskIndex !== index)
    );
  };

  return (
    <div className={styles.InfoTasks}>

      <div className={styles.tasksCounter}>
        <h4>Created Tasks:&ensp; 
          <span className={styles.createdNum}>
          {tasks.length}
        </span>
        </h4>

        <h4>Completed Tasks:&ensp;
          <span className={styles.completedNum}>
          {checkedTasks.length}
        </span>
        </h4>
      </div>

      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          checked={checkedTasks.includes(index)}
          onCheckboxChange={() => handleCheckboxChange(index)}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
};

export default InfoTaskList;
