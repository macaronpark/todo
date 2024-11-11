import { TCategory } from '@entities/category';

import { QUERY_KEY, queryClient } from '@shared/react-query';

import { useStore } from '@shared/store';
import { useMutation } from '@tanstack/react-query';
import { deleteCategories } from './delete-category.api';

export const useDeleteCategory = () => {
  const categoryList =
    queryClient.getQueryState<TCategory[]>(QUERY_KEY.categoryList)?.data ?? [];

  const setSelectedCategory = useStore((state) => state.setSelectedCategory);

  const deleteCategory = useMutation({
    mutationKey: ['deleteCategory'],
    mutationFn: deleteCategories,
    onSuccess: (data: TCategory) => {
      handleSuccess(data.id);
    },
    onError: (error: Error) => {
      if (error instanceof Error) {
        throw new Error(`❌ 카테고리를 삭제할 수 없습니다.: ${error.message}`);
      }

      throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
    },
  });

  const handleSuccess = (categoryId: string) => {
    const newList = categoryList.filter((item) => item.id !== categoryId);

    queryClient.setQueryData(QUERY_KEY.categoryList, newList);

    const prevIdx = categoryList.findIndex((item) => item.id === categoryId);
    if (!prevIdx) return;

    const newSelectedCategoryIdx = prevIdx !== 0 ? prevIdx - 1 : 0;
    setSelectedCategory(newList?.[newSelectedCategoryIdx]);
  };

  return { deleteCategory };
};
