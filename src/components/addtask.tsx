import { useState, useEffect, useContext } from 'react';
import styles from './addTask.module.css';
import { AppContext } from '../context/AppContext';

const AddTask = () => {
  const context = useContext(AppContext);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const updatedTasks = [...context.tasks, newTask];
    context.setTasks(updatedTasks);
    setNewTask('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(context.tasks));
  }, [context.tasks]);

  return (
    <div className={styles.addTask}>
      <label className={styles.addTaskContainer} htmlFor="input" title="Create a new Task">
        <input
          className={styles.AddInput}
          placeholder="Create a new task"
          type="text"
          title='Create a new task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button className={styles.addbutton}
          title='Add a new task'
          onClick={handleAddTask}>
          Add
          <div className={styles.addIcon}>+</div>
        </button>
      </label>
    </div>
  );
};

export default AddTask;
