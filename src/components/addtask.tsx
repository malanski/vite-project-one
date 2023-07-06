import { useState } from 'react';
import styles from './addTask.module.css';
import InfoTask from './InfoTask';

export const AddTask = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask('');
  };

  return (
    <div className={styles.addTask}>
      <h1>Todo</h1>
      <h2>Tasks</h2>
      <label className={styles.addTaskContainer} htmlFor="input" title="Create a new Task">
        <input
          className={styles.AddInput}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className={styles.addbutton} onClick={handleAddTask}>
          +
        </button>
      </label>

      <InfoTask tasks={tasks} />

    </div>
  );
};
