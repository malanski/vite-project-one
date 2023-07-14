import { useState, useEffect } from 'react';
import styles from './InfoTask.module.css';
import Task from './Task';

interface InfoTaskListProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
  onCheckboxChange: (index: number) => void;
}

const InfoTaskList = ({ tasks, onDeleteTask, onCheckboxChange }: InfoTaskListProps) => {
  const [checkedTasks, setCheckedTasks] = useState<number[]>([]);

  useEffect(() => {
    const retrieveCheckedTasks = () => {
      try {
        const storedCheckedTasks = localStorage.getItem('checkedTasks');
        if (storedCheckedTasks) {
          setCheckedTasks(JSON.parse(storedCheckedTasks));
        }
      } catch (error) {
        console.log('Error retrieving checked tasks from local storage:', error);
      }
    };

    retrieveCheckedTasks();
  }, []);

  useEffect(() => {
    const saveCheckedTasks = () => {
      try {
        localStorage.setItem('checkedTasks', JSON.stringify(checkedTasks));
      } catch (error) {
        console.log('Error saving checked tasks to local storage:', error);
      }
    };

    saveCheckedTasks();
  }, [checkedTasks]);

  useEffect(() => {
    console.log(tasks); // Log tasks data to console on every refresh
  }, [tasks]);

  const handleCheckboxChange = (index: number) => {
    onCheckboxChange(index);

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
        <h4>
          Created Tasks:&ensp;
          <span className={styles.createdNum}>{tasks.length}</span>
        </h4>
        <h4>
          Completed Tasks:&ensp;
          <span className={styles.completedNum}>{checkedTasks.length}</span>
        </h4>
      </div>
      
      <hr />
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
