import {
  type Dispatch,
  type SetStateAction,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';
import type { TTask } from './task.type';

type TTaskContext = {
  taskList: TTask[];
  setTaskList: Dispatch<React.SetStateAction<TTask[]>>;
  selectedTask?: TTask;
  setSelectedTask: Dispatch<SetStateAction<TTask | undefined>>;
};

const TaskContext = createContext<TTaskContext>({
  taskList: [],
  setTaskList: () => {},
  setSelectedTask: () => {},
});

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [taskList, setTaskList] = useState<TTask[]>([]);

  const [selectedTask, setSelectedTask] = useState<TTask | undefined>(
    undefined
  );

  return (
    <TaskContext.Provider
      value={{
        taskList,
        setTaskList,
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
