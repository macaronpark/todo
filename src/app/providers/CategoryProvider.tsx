import { createContext, useContext, useEffect, useState } from 'react';
import type { TCategory } from '@entities/category';
import { addCategory } from '@features/category-add';
import { getCategoryList } from '@features/category-show';
import { deleteCategory } from '@features/category-delete';

type TCategoryContext = {
  categoryList: TCategory[];
  selectedCategory?: TCategory;
  handleAddCategory: () => void;
  handleDeleteCategory: (id?: string) => void;
  handleSelectCategory: (category: TCategory) => void;
};

const CategoryContext = createContext<TCategoryContext>({
  categoryList: [],
  selectedCategory: undefined,
  handleAddCategory: () => {},
  handleDeleteCategory: () => {},
  handleSelectCategory: () => {},
});

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categoryList, setCategoryList] = useState<TCategory[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<
    TCategory | undefined
  >(undefined);

  useEffect(() => {
    handleGetCategoryList();
  }, []);

  const handleSelectCategory = (category: TCategory) => {
    setSelectedCategory(category);
  };

  const handleGetCategoryList = () => {
    getCategoryList({
      onSuccess: (categoryList) => {
        setCategoryList(categoryList ?? []);

        if (categoryList.length > 0) {
          const targetCategory = categoryList[0];

          setSelectedCategory({
            id: targetCategory.id,
            title: targetCategory.title,
          });
        }
      },
    });
  };

  const handleAddCategory = () => {
    addCategory({
      onSuccess: () => {
        getCategoryList({
          onSuccess: (categoryList) => {
            setCategoryList(categoryList ?? []);
            const newCategory = categoryList[categoryList.length - 1];

            setSelectedCategory({
              id: newCategory.id,
              title: newCategory.title,
            });
          },
        });
      },
    });
  };

  const handleDeleteCategory = async (id?: string) => {
    deleteCategory({
      id,
      onSuccess: () => {
        const prevSelectedCategoryIdx = categoryList.findIndex(
          (category) => category.id === id
        );

        const newCategoryList = categoryList.filter(
          (category) => category.id !== id
        );

        const newSelectedCategoryIdx =
          prevSelectedCategoryIdx !== 0 ? prevSelectedCategoryIdx - 1 : 0;

        setCategoryList(newCategoryList);
        setSelectedCategory(newCategoryList?.[newSelectedCategoryIdx]);
      },
    });
  };

  return (
    <CategoryContext.Provider
      value={{
        categoryList,
        selectedCategory,
        handleAddCategory,
        handleDeleteCategory,
        handleSelectCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
