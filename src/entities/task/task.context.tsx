import React, { createContext, useContext, useEffect, useState } from 'react';
import type { TTask } from './task.type';

type TTaskContext = {
  taskList: TTask[];
};

const TaskContext = createContext<TTaskContext>({
  taskList: [],
});

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({
  categoryId,
  children,
}: {
  categoryId?: string;
  children: React.ReactNode;
}) => {
  const [taskList, setTaskList] = useState<TTask[]>([]);

  useEffect(() => {}, [categoryId]);

  return (
    <TaskContext.Provider
      value={{
        taskList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
