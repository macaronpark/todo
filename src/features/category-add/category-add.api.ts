import {
  addCategoryToDB,
  TCategory,
  useCategoryContext,
} from '@entities/category';
import { useCallback } from 'react';

const useCategoryAdd = () => {
  const { setCategoryList, setSelectedCategory } = useCategoryContext();

  const addCategory = async () => {
    try {
      const newCategory = { title: '새 카테고리' };

      const category = await addCategoryToDB(newCategory);
      handleSuccess(category);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`❌ 새 카테고리를 만들 수 없습니다.: ${error.message}`);
      }

      throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
    }
  };

  const handleSuccess = useCallback(
    (category: TCategory) => {
      setCategoryList((prev) => [...prev, category]);
      setSelectedCategory({
        id: category.id,
        title: category.title,
      });
    },
    [setCategoryList, setSelectedCategory]
  );

  return { addCategory };
};

export default useCategoryAdd;
