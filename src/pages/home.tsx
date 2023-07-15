
import { useContext } from 'react';

import AddTask from '../components/AddTask';
import InfoTaskList from '../components/InfoTaskList';
import { EmptyTask } from '../components/EmptyTask';
import { TaskItem } from '../components/TaskItem';
import { AppContext } from '../context/AppContext';

export const Home = () => {
  const context = useContext(AppContext)
  const haveTask = context.tasks.length > 0
  
  return (
    <main>
      <AddTask />
      <InfoTaskList />

      {
        haveTask
          ? 
          context.tasks.map(task => (
          <TaskItem task={task} key={task} checked={false} index={-1} /> 
        ))
          : 
        <EmptyTask />
      }

    </main>
  )
}