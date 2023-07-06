import { useState } from 'react';
import styles from './AddTask.module.css';

interface Task {
  content: string;
  checked: boolean;
}

export const AddTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleCheckboxChange = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? { ...task, checked: !task.checked } : task))
    );
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    setTasks((prevTasks) => [...prevTasks, { content: newTask, checked: false }]);
    setNewTask('');
  };

  return (
    <div className={styles.tasks}>
      <h1>Todo</h1>
      <h2>Tasks</h2>
      <label className={styles.taskContainer} htmlFor="input" title="Create a new Task">
        <input
          className={styles.checkInput}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className={styles.addbutton} onClick={handleAddTask}>
          +
        </button>
      </label>

      {tasks.map((task, index) => (

        <label className={styles.taskContainer} key={index}>
          <button className={styles.checkInput}
            onClick={() => handleCheckboxChange(index)}>
              <input
                className={styles.checkBox}
                type="checkbox"
                checked={task.checked}
                onChange={() => handleCheckboxChange(index)}
              />

            <span
              style={{
                textDecoration: task.checked ? 'line-through' : 'none',
                background: task.checked ? '#323a3a' : 'none',
              }}
            >
              &ensp;{task.content}
            </span>
          </button>
        </label>
      ))}
    </div>
  );
};
