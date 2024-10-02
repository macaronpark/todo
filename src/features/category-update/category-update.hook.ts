import { useCallback } from 'react';

import {
  TCategory,
  updateCategoryToDB,
  useCategoryContext,
} from '@entities/category';

const useCategoryUpdate = () => {
  const { setCategoryList, setSelectedCategory } = useCategoryContext();

  const updateCategory = async ({
    newCategory,
    onError,
    onFinally,
  }: {
    newCategory: TCategory;
    onError: (error: Error) => void;
    onFinally: () => void;
  }) => {
    try {
      const category = await updateCategoryToDB(newCategory);
      handleSuccess(category);
    } catch (error) {
      if (error instanceof Error) onError(error);
    } finally {
      onFinally();
    }
  };

  const handleSuccess = useCallback((newCategory: TCategory) => {
    setCategoryList((prev) =>
      prev.map((category) =>
        category.id === newCategory.id ? newCategory : category
      )
    );

    setSelectedCategory(newCategory);
  }, []);

  return {
    updateCategory,
  };
};

export default useCategoryUpdate;
