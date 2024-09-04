export const DB_NAME = 'db';
export const DB_VERSION = 1;

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      Object.values(EStoreName).forEach((storeName) => {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, {
            keyPath: 'id',
            autoIncrement: true,
          });
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

export const initDB = async ({
  storeName,
  transactionMode = ETransactionMode.readwrite,
}: {
  storeName: EStoreName;
  transactionMode?: ETransactionMode;
}) => {
  const db = await openDB();
  const store = getObjectStore({ db, storeName, transactionMode });
  return store;
};

export enum ETransactionMode {
  readonly = 'readonly',
  readwrite = 'readwrite',
}

export enum EStoreName {
  categoryList = 'category_list',
  taskList = 'task_list',
}
