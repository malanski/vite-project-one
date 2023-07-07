import React from 'react';
import styles from './InfoTask.module.css';

interface TaskProps {
  task: string;
  checked: boolean;
  onCheckboxChange: () => void;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ task, checked, onCheckboxChange, onDelete }) => {
  return (
    <label className={styles.InfoTaskContainer}>
      <input
        type="checkbox"
        title="Check mark this task"
        checked={checked}
        onChange={onCheckboxChange}
      />
      <span
        style={{
          width: '300px',
          marginLeft: '20px',
          textDecoration: checked ? 'line-through' : 'none'
        }}
      >
        {task}
      </span>
      <button
        title="Delete this task"
        className={styles.taskDelete}
        onClick={onDelete}
      >
        X
      </button>
    </label>
  );
};

export default Task;
