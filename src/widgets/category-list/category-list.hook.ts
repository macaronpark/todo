import {
  type TCategory,
  getCategoryListFromDB,
  useCategoryContext,
} from '@entities/category';
import { useCallback } from 'react';

const useCategoryListShow = () => {
  const {
    categoryList,
    setCategoryList,
    selectedCategory,
    setSelectedCategory,
  } = useCategoryContext();

  const getCategoryList = async () => {
    try {
      const categoryList = await getCategoryListFromDB();
      handleSuccess(categoryList);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `❌ 카테고리 목록을 불러올 수 없습니다.: ${error.message}`
        );
      }

      throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
    }
  };

  const handleSuccess = useCallback(
    (categoryList: TCategory[]) => {
      setCategoryList(categoryList ?? []);

      if (categoryList.length > 0) {
        const targetCategory = categoryList[0];

        setSelectedCategory({
          id: targetCategory.id,
          title: targetCategory.title,
        });
      }
    },
    [setCategoryList, setSelectedCategory]
  );

  return {
    categoryList,
    selectedCategory,
    setSelectedCategory,
    getCategoryList,
  };
};

export default useCategoryListShow;
