import { createContext, useState, ReactNode } from 'react';

const getLocalStorage = () => {
  const savedTasksLocalStorage = localStorage.getItem('tasks');
  let parsedTasks: string[] = [];

  if (savedTasksLocalStorage) {
    parsedTasks = JSON.parse(savedTasksLocalStorage) as string[];
  }

  return parsedTasks;
};

interface IAppContext {
  [x: string]: any;
  setCompletedTaskIndices(updatedCompletedTaskIndices: number[]): void;
  tasks: string[];
  setTasks: (tasks: string[]) => void;
  completedTaskIndices: number[];
  setTaskCompletion: (index: number, isCompleted: boolean) => void;
  amountTasksCompleted: number;
  addCompletedTaskIndex: (index: number) => void;
  deleteTask: (index: number) => void;
}
interface Props {
  children: ReactNode;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: Props) => {
  const tasksLocalStorage = getLocalStorage();

  const [tasks, setTasks] = useState<string[]>(tasksLocalStorage);
  const [completedTaskIndices, setCompletedTaskIndices] = useState<number[]>([]);
  const [amountTasksCompleted, setAmountTasksCompleted] = useState(0);

  const setTaskCompletion = (index: number, isCompleted: boolean) => {
    if (isCompleted) {
      setCompletedTaskIndices((prevIndices) => [...prevIndices, index]);
    } else {
      setCompletedTaskIndices((prevIndices) =>
        prevIndices.filter((i) => i !== index)
      );
    }
  };

  const addCompletedTaskIndex = (index: number) => {
    setCompletedTaskIndices((prevIndices) => [...prevIndices, index]);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_task, i) => i !== index);
    setTasks(updatedTasks);

    const updatedCompletedTaskIndices = completedTaskIndices.filter((i) => i !== index);
    setCompletedTaskIndices(updatedCompletedTaskIndices);
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        completedTaskIndices,
        setTaskCompletion,
        amountTasksCompleted,
        addCompletedTaskIndex,
        setAmountTasksCompleted,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};