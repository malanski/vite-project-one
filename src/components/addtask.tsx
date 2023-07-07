import { useState } from 'react';
import styles from './addTask.module.css';
// import InfoTask from './InfoTask';
import { EmptyTask } from './EmptyTask';
import InfoTaskList from './InfoTaskList';

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

      {tasks.length === 0 ? <EmptyTask /> : 
        <InfoTaskList tasks={tasks} onDeleteTask={(index) => {
          const updatedTasks = [...tasks];
          updatedTasks.splice(index, 1);
          setTasks(updatedTasks);
        }}
      />}

    </div>
  );
};
