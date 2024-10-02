import {
  type Dispatch,
  type SetStateAction,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';
import type { TCategory } from '@entities/category';

type TCategoryContext = {
  categoryList: TCategory[];
  setCategoryList: Dispatch<SetStateAction<TCategory[]>>;
  selectedCategory: TCategory | null;
  setSelectedCategory: Dispatch<SetStateAction<TCategory | null>>;
  editingCategoryId: number | null;
  setEditingCategoryId: Dispatch<SetStateAction<number | null>>;
};

const CategoryContext = createContext<TCategoryContext>({
  categoryList: [],
  setCategoryList: () => {},
  selectedCategory: null,
  setSelectedCategory: () => {},
  editingCategoryId: null,
  setEditingCategoryId: () => {},
});

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categoryList, setCategoryList] = useState<TCategory[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<TCategory | null>(
    null
  );

  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(
    null
  );

  return (
    <CategoryContext.Provider
      value={{
        categoryList,
        setCategoryList,
        selectedCategory,
        setSelectedCategory,
        editingCategoryId,
        setEditingCategoryId,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
