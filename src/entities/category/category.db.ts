import type { TCategory, TNewCatergory } from './category.type';
import { EStoreName, ETransactionMode, initDB } from '@shared/db';

export const getCategoryListFromDB = async (): Promise<TCategory[]> => {
  const db = await openDB();
  const store = db
    .transaction(EStoreName.categoryList, ETransactionMode.readonly)
    .objectStore(EStoreName.categoryList);

    const request = store.getAll();
  });
};

export const addCategoryToDB = async (
  newCategory: TNewCatergory
): Promise<TCategory> => {
  const db = await openDB();
  const store = db
    .transaction(EStoreName.categoryList, ETransactionMode.readwrite)
    .objectStore(EStoreName.categoryList);

  return new Promise((resolve, reject) => {
    const request = store.add(newCategory);

    request.onsuccess = () => {
      const category = {
        ...newCategory,
        id: Number(request.result),
      };

      resolve(category);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const updateCategoryToDB = async (category: TCategory) => {
  const db = await openDB();
  const store = db
    .transaction(EStoreName.categoryList, ETransactionMode.readwrite)
    .objectStore(EStoreName.categoryList);

  return store.put(category);
};

export const deleteCategoryFromDB = async (categoryId: number) => {
  const db = await initDB({ storeName: EStoreName.categoryList });
  return db.delete(categoryId);
};
