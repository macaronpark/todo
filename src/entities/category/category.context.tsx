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
  selectedCategory?: TCategory;
  setSelectedCategory: Dispatch<SetStateAction<TCategory | undefined>>;
};

const CategoryContext = createContext<TCategoryContext>({
  categoryList: [],
  setCategoryList: () => {},
  setSelectedCategory: () => {},
});

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categoryList, setCategoryList] = useState<TCategory[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<
    TCategory | undefined
  >(undefined);

  return (
    <CategoryContext.Provider
      value={{
        categoryList,
        setCategoryList,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
