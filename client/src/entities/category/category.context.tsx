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
};

const CategoryContext = createContext<TCategoryContext>({
  categoryList: [],
  setCategoryList: () => {},
});

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categoryList, setCategoryList] = useState<TCategory[]>([]);

  return (
    <CategoryContext.Provider
      value={{
        categoryList,
        setCategoryList,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
