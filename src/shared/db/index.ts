export const DB_NAME = 'db';
export const DB_VERSION = 1;

export enum ETransactionMode {
  readonly = 'readonly',
  readwrite = 'readwrite',
}

export enum EStoreName {
  categoryList = 'category_list',
  taskList = 'task_list',
}

export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      Object.values(EStoreName).forEach((storeName) => {
        if (!db.objectStoreNames.contains(storeName)) {
          const store = db.createObjectStore(storeName, {
            keyPath: 'id',
            autoIncrement: true,
          });

          if (storeName === EStoreName.taskList) {
            store.createIndex('categoryId', 'categoryId', { unique: false });
          }
        }
      });
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

const getObjectStore = ({
  db,
  storeName,
  transactionMode,
}: {
  db: IDBDatabase;
  storeName: EStoreName;
  transactionMode: ETransactionMode;
}) => {
  const transaction = db.transaction(storeName, transactionMode);
  return transaction.objectStore(storeName);
};
