import { PlusIcon } from '@heroicons/react/20/solid';

import { TEST_ID } from '@shared/test';
import { useTodoStore } from '@shared/store';

import { useAddCategory } from './add-category.hook';
import styles from './add-category.module.scss';

type TProps = {
  className?: string;
  refetchCategoryList: () => void;
};

export const AddCategoryButton = ({
  className,
  refetchCategoryList,
}: TProps) => {
  const setSelectedCategory = useTodoStore(
    (state) => state.setSelectedCategory
  );
  const setEditingCategoryId = useTodoStore(
    (state) => state.setEditingCategory
  );

  const { addCategory } = useAddCategory();

  const handleAddCategoryButtonClick = async () => {
    addCategory.mutate(
      { title: '새 카테고리' },
      {
        onSuccess: (data) => {
          refetchCategoryList();

          const response = data.json();
          const category = response;

          setSelectedCategory({
            id: category.id,
            title: category.title,
          });

          setEditingCategoryId(category.id);
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
