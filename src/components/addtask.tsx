import { useState } from 'react';
import styles from './addTask.module.css';
import InfoTask from './InfoTask';
import { EmptyTask } from './emptyTask';

export const AddTask = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };
  return (
    <div className={styles.addTask}>
      <h1>Todo</h1>
      <h2>Tasks</h2>
      <label className={styles.addTaskContainer} htmlFor="input" title="Create a new Task">
        <input
          className={styles.AddInput}
          type="text"
          title='Create a new task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}

        />
        <button className={styles.addbutton} 
          title='Add a new task'
          onClick={handleAddTask}>
          +
        </button>
      </label>

      {/*
       Create a conditional:
        if tasks is empty so it shows the EmptyTask element
        if tasks exists show InfoTask element.
       */}
            {tasks.length === 0 ? <EmptyTask /> : <InfoTask tasks={tasks} />}

      

    </div>
  );
};
