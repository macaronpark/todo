import {
  type Dispatch,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';
import type { TTask } from './task.type';

type TTaskContext = {
  taskList: TTask[];
  setTaskList: Dispatch<React.SetStateAction<TTask[]>>;
};

const TaskContext = createContext<TTaskContext>({
  taskList: [],
  setTaskList: () => {},
});

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [taskList, setTaskList] = useState<TTask[]>([]);

  return (
    <TaskContext.Provider
      value={{
        taskList,
        setTaskList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
