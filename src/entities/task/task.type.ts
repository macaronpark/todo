export type TTask = {
  categoryId: string;
  id: string;
  title: string;
  createdAt: string;
  expiredAt?: string;
  isCompleted: boolean;
  memo?: string;
};

export type TNewTask = Omit<TTask, 'id'>;
