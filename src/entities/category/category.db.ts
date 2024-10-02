import type { TCategory, TNewCatergory } from './category.type';
import { EStoreName, ETransactionMode, openDB } from '@shared/db';

export const getCategoryListFromDB = async (): Promise<TCategory[]> => {
  const db = await openDB();
  const store = db
    .transaction(EStoreName.categoryList, ETransactionMode.readonly)
    .objectStore(EStoreName.categoryList);

  return new Promise<TCategory[]>((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const addCategoryToDB = async (
  newCategory: TNewCatergory
): Promise<TCategory> => {
  const db = await openDB();
  const store = db
    .transaction(EStoreName.categoryList, ETransactionMode.readwrite)
    .objectStore(EStoreName.categoryList);

  return new Promise<TCategory>((resolve, reject) => {
    const request = store.add(newCategory);

    request.onsuccess = () => {
      const category = {
        ...newCategory,
        id: Number(request.result),
      };

      resolve(category);
    };

    request.onerror = () => reject(request.error);
  });
};

export const updateCategoryToDB = async (newCategory: TCategory) => {
  const db = await openDB();
  const store = db
    .transaction(EStoreName.categoryList, ETransactionMode.readwrite)
    .objectStore(EStoreName.categoryList);

  return new Promise<TCategory>((resolve, reject) => {
    const request = store.put(newCategory);

    request.onsuccess = () => resolve(newCategory);
    request.onerror = () => reject(request.error);
  });
};

export const deleteCategoryFromDB = async (categoryId: number) => {
  const db = await openDB();
  const transaction = db.transaction(
    [EStoreName.categoryList, EStoreName.taskList],
    ETransactionMode.readwrite
  );

  const categoryListStore = transaction.objectStore(EStoreName.categoryList);
  categoryListStore.delete(categoryId);

  const taskListStore = transaction.objectStore(EStoreName.taskList);
  const taskIndex = taskListStore.index('categoryId');
  const taskQuery = taskIndex.getAllKeys(categoryId);
  taskQuery.onsuccess = () => {
    const taskKeys = taskQuery.result;

    taskKeys.forEach((taskKey) => {
      taskListStore.delete(taskKey);
    });
  };

  return new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
};
