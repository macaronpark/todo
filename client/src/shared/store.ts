import { create } from 'zustand';

import { TCategory } from '@entities/category';
import { TTask } from '@entities/task';

type TTodoState = {
  selectedCategory: TCategory | null;
  editingCategory: TCategory | null;
  selectedTask: TTask | null;
  setSelectedCategory: (category: TCategory | null) => void;
  setEditingCategory: (category: TCategory | null) => void;
  setSelectedTask: (task: TTask | null) => void;
};

export const useTodoStore = create<TTodoState>()((set) => ({
  selectedCategory: null,
  editingCategory: null,
  selectedTask: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setEditingCategory: (category) => set({ editingCategory: category }),
  setSelectedTask: (task) => set({ selectedTask: task }),
}));
