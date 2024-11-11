import { useQueryClient } from '@tanstack/react-query';
import { PlusIcon } from '@heroicons/react/20/solid';

import { QUERY_KEY } from '@shared/react-query/key';
import { useStore } from '@shared/store';
import { TEST_ID } from '@shared/test';

import { TCategory } from '@entities/category';

import { useAddCategory } from './add-category.hook';
import styles from './add-category.module.scss';

type TProps = {
  className?: string;
};

export const AddCategoryButton = ({ className }: TProps) => {
  const queryClient = useQueryClient();

  const setSelectedCategory = useStore((state) => state.setSelectedCategory);
  const setEditingCategory = useStore((state) => state.setEditingCategory);

  const { addCategory } = useAddCategory();

  const handleAddCategoryButtonClick = async () => {
    addCategory.mutate(
      { title: '새 카테고리' },
      {
        onSuccess: (data: TCategory) => {
          const category = data;

          queryClient.setQueryData(
            QUERY_KEY.categoryList,
            (oldData: TCategory[]) => {
              return [...oldData, category];
            }
          );

          setSelectedCategory(category);
          setEditingCategory(category);
        },
      }
    );
  };

  return (
    <button
      className={`${styles.AddCategoryButton} ${className ?? ''}`}
      data-testid={TEST_ID.category.addButton}
      onClick={handleAddCategoryButtonClick}
    >
      <PlusIcon className={styles.icon} />
      카테고리 추가
    </button>
  );
};
