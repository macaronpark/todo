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

export const addCategoryToDB = async (
  newCategory: TNewCatergory
): Promise<TCategory> => {
  const db = await initDB({
    storeName: EStoreName.categoryList,
    transactionMode: ETransactionMode.readwrite,
  });

  return new Promise((resolve, reject) => {
    const request = db.add(newCategory);

    request.onsuccess = () => {
      const category = {
        ...newCategory,
        id: String(request.result),
      };

      resolve(category);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const updateCategoryToDB = async (category: TCategory) => {
  const db = await initDB({ storeName: EStoreName.categoryList });
  return db.put(category);
};

export const deleteCategoryFromDB = async (categoryId: string) => {
  const db = await initDB({ storeName: EStoreName.categoryList });
  return db.delete(categoryId);
};
