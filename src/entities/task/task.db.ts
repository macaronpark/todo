import { EStoreName, ETransactionMode, openDB } from '@shared/db';
import type { TNewTask, TTask } from '@entities/task';

export const getTaskListFromDB = async (
  categoryId: number
): Promise<TTask[]> => {
  const db = await openDB();
  const store = db
    .transaction(EStoreName.taskList, ETransactionMode.readonly)
    .objectStore(EStoreName.taskList);

  return new Promise((resolve, reject) => {
    const request = store.index('categoryId');
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
  const db = await openDB();
  const store = db
    .transaction(EStoreName.taskList, ETransactionMode.readwrite)
    .objectStore(EStoreName.taskList);

  return new Promise((resolve, reject) => {
    const request = store.add(newTask);

    request.onsuccess = () => {
      const task = {
        ...newTask,
        id: Number(request.result),
      };

      resolve(task);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const updateTaskToDB = async (task: TTask) => {
  const db = await openDB();
  const store = db
    .transaction(EStoreName.taskList, ETransactionMode.readwrite)
    .objectStore(EStoreName.taskList);

  return store.put(task);
};

export const deleteTaskFromDB = async (taskId: number) => {
  const db = await openDB();
  const store = db
    .transaction(EStoreName.taskList, ETransactionMode.readwrite)
    .objectStore(EStoreName.taskList);

  return new Promise<void>((resolve, reject) => {
    const request = store.delete(taskId);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};
