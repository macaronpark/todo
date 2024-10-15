export type TTask = {
  categoryId: number;
  id: number;
  title: string;
  createdAt: string;
  expiredAt?: string;
  isCompleted: boolean;
  memo?: string;
};

export type TNewTask = Omit<TTask, 'id'>;
