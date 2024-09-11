import type { TNewTask, TTask } from '@entities/task';
import { EStoreName, ETransactionMode, initDB } from './helper';

export const getTaskList = async (categoryId: string): Promise<TTask[]> => {
  const db = await initDB({
    storeName: EStoreName.taskList,
    transactionMode: ETransactionMode.readonly,
  });

  return new Promise((resolve, reject) => {
    const request = db.get(categoryId);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const addTask = async (newCategory: TNewTask) => {
  const db = await initDB({ storeName: EStoreName.taskList });
  return db.add(newCategory);
};

export const updateTask = async (task: TTask) => {
  const db = await initDB({ storeName: EStoreName.taskList });
  return db.put(task);
};

export const deleteTask = async (categoryId: string) => {
  const db = await initDB({ storeName: EStoreName.taskList });
  return db.delete(categoryId);
};
