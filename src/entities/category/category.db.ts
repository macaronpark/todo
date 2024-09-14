import type { TCategory, TNewCatergory } from './category.type';
import { EStoreName, ETransactionMode, initDB } from '@shared/db';

export const getCategoryListFromDB = async (): Promise<TCategory[]> => {
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

export const addCategoryToDB = async (newCategory: TNewCatergory) => {
  const db = await initDB({ storeName: EStoreName.categoryList });
  return db.add(newCategory);
};

export const updateCategoryToDB = async (category: TCategory) => {
  const db = await initDB({ storeName: EStoreName.categoryList });
  return db.put(category);
};

export const deleteCategoryFromDB = async (categoryId: string) => {
  const db = await initDB({ storeName: EStoreName.categoryList });
  return db.delete(categoryId);
};
