import { EStoreName, ETransactionMode, initDB } from '@shared/db';
import type { TNewTask, TTask } from '@entities/task';

export const getTaskListFromDB = async (
  categoryId: string
): Promise<TTask[]> => {
  const db = await initDB({
    storeName: EStoreName.taskList,
    transactionMode: ETransactionMode.readonly,
  });

  return new Promise((resolve, reject) => {
    const request = db.index('categoryId');
    const query = request.getAll(categoryId);

    query.onsuccess = () => {
      resolve(query.result ?? []);
    };

    query.onerror = () => {
      reject(query.error);
    };
  });
};

export const addTaskToDB = async (newTask: TNewTask): Promise<TTask> => {
  const db = await initDB({
    storeName: EStoreName.taskList,
    transactionMode: ETransactionMode.readwrite,
  });

  return new Promise((resolve, reject) => {
    const request = db.add(newTask);

    request.onsuccess = () => {
      const task = {
        ...newTask,
        id: String(request.result),
      };

      resolve(task);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const updateTaskToDB = async (task: TTask) => {
  const db = await initDB({ storeName: EStoreName.taskList });
  return db.put(task);
};

export const deleteTaskFromDB = async (categoryId: string) => {
  const db = await initDB({ storeName: EStoreName.taskList });
  return db.delete(categoryId);
};
