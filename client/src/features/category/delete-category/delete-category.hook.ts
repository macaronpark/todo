import { deleteCategoryFromDB, useCategoryContext } from '@entities/category';

export const useDeleteCategory = () => {
  const { categoryList, setCategoryList, setSelectedCategory } =
    useCategoryContext();

  const deleteCategory = async (categoryId: number) => {
    if (!categoryId) return;

    try {
      await deleteCategoryFromDB(categoryId);
      handleSuccess(categoryId);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`❌ 카테고리를 삭제할 수 없습니다.: ${error.message}`);
      }

      throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
    }
  };

  const handleSuccess = (categoryId: number) => {
    const prevSelectedCategoryIdx = categoryList.findIndex(
      (category) => category.id === categoryId
    );

    const newCategoryList = categoryList.filter(
      (category) => category.id !== categoryId
    );

    const newSelectedCategoryIdx =
      prevSelectedCategoryIdx !== 0 ? prevSelectedCategoryIdx - 1 : 0;

    setCategoryList(newCategoryList);
    setSelectedCategory(newCategoryList?.[newSelectedCategoryIdx]);
  };

  return { deleteCategory };
};
