import type { TCategory, TNewCatergory } from '@entities/category';
import { EStoreName, ETransactionMode, initDB } from './helper';

export const getCategoryList = async (): Promise<TCategory[]> => {
  const db = await initDB({
    storeName: EStoreName.categoryList,
    transactionMode: ETransactionMode.readonly,
  });

  return new Promise((resolve, reject) => {
    const request = db.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const addCategory = async (newCategory: TNewCatergory) => {
  const db = await initDB({ storeName: EStoreName.categoryList });
  return db.add(newCategory);
};

export const updateCategory = async (category: TCategory) => {
  const db = await initDB({ storeName: EStoreName.categoryList });
  return db.put(category);
};

export const deleteCategory = async (categoryId: string) => {
  const db = await initDB({ storeName: EStoreName.categoryList });
  return db.delete(categoryId);
};
