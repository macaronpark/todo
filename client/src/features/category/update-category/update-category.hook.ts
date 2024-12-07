import { TCategory } from '@entities/category';
import { useStore } from '@shared/store';
import { QUERY_KEY, queryClient } from '@shared/react-query';
import { useMutation } from '@tanstack/react-query';
import { updateCategory as updateCategoryAPI } from './update-category.api';

export const useUpdateCategory = () => {
  const categoryList =
    queryClient.getQueryState<TCategory[]>(QUERY_KEY.categoryList)?.data ?? [];

  const setSelectedCategory = useStore((state) => state.setSelectedCategory);

  const updateCategory = useMutation({
    mutationKey: ['updateCategory'],
    mutationFn: updateCategoryAPI,
    onSuccess: (newCategory: TCategory) => {
      const newList = categoryList.map((category) =>
        category.id === newCategory.id ? newCategory : category
      );

      queryClient.setQueryData(QUERY_KEY.categoryList, newList);

      setSelectedCategory(newCategory);
    },
    onError: (error: Error) => {
      if (error instanceof Error) {
        throw new Error(`❌ 카테고리를 수정할 수 없습니다.: ${error.message}`);
      }

      throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
    },
  });

  return {
    updateCategory,
  };
};
