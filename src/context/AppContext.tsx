import { createContext, useState, ReactNode } from 'react';
import { getLocalStorage } from '../utils/getLocalStorage';

interface IAppContext {
  tasks: string[];
  setTasks: (task: string[]) => void;
  amountTasksCompleted: number;
  setAmountTasksCompleted: (amount: number) => void;
}

interface Props {
  children: ReactNode;
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: Props) => {
  const tasksLocalStorage = getLocalStorage()
  
  const [tasks, setTasks] = useState<string[]>(tasksLocalStorage)
  const [amountTasksCompleted, setAmountTasksCompleted] = useState(0)

  return (
    <AppContext.Provider 
      value={{ tasks,
           setTasks,
           amountTasksCompleted,
           setAmountTasksCompleted }}>
      { children }
    </AppContext.Provider>
  )
}