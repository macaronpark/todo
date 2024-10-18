import { TrashIcon } from '@heroicons/react/24/outline';

import { useDeleteCategory } from './delete-category.hook';

import styles from './delete-category.module.scss';

type TProps = {
  categoryId: number;
  categoryTitle?: string;
};

export const DeleteCategoryButton = ({ categoryId, categoryTitle }: TProps) => {
  const { deleteCategory } = useDeleteCategory();

  const handleCategoryDeleteButtonClick = () => {
    if (!categoryId) return;

    if (
      window.confirm(
        `🚨 '${categoryTitle}'와 모든 태스크를 영구적으로 삭제합니다.`
      )
    ) {
      deleteCategory(categoryId);
    }
  };

  return (
    <button
      className={styles.DeleteCategoryButton}
      onClick={handleCategoryDeleteButtonClick}
      title="카테고리 삭제"
    >
      <TrashIcon className={styles.icon} />
    </button>
  );
};
