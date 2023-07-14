import { useState, useEffect } from 'react';
import styles from './addTask.module.css';
import { EmptyTask } from './EmptyTask';
import InfoTaskList from './InfoTaskList';

const AddTask = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const retrieveTasks = () => {
      try {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.log('Error retrieving tasks from local storage:', error);
      }
    };

    retrieveTasks();
  }, []);

  useEffect(() => {
    const saveTasks = () => {
      try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.log('Error saving tasks to local storage:', error);
      }
    };

    saveTasks();
  }, [tasks]);

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

  useEffect(() => {
    console.log(tasks); // Log tasks data to console on every refresh
  }, [tasks]);

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

      {tasks.length === 0 ? (
        <EmptyTask />
      ) : (
        <InfoTaskList
          tasks={tasks}
          onDeleteTask={(index) => {
            const updatedTasks = [...tasks];
            updatedTasks.splice(index, 1);
            setTasks(updatedTasks);
          }}
          onCheckboxChange={(index) => {
            const updatedTasks = [...tasks];
            updatedTasks[index] = newTask; // Update the specific task
            setTasks(updatedTasks);
          }}
        />
      )}
    </div>
  );
};

export default AddTask;
