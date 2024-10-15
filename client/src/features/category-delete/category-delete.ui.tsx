import { TrashIcon } from '@heroicons/react/24/outline';

import useCategoryDelete from './category-delete.hook';

import styles from './category-delete.module.scss';

type TProps = {
  categoryId: number;
  categoryTitle?: string;
};

const CategoryDeleteButton = ({ categoryId, categoryTitle }: TProps) => {
  const { deleteCategory } = useCategoryDelete();

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
      className={styles.CategoryDeleteButton}
      onClick={handleCategoryDeleteButtonClick}
      title="카테고리 삭제"
    >
      <TrashIcon className={styles.icon} />
    </button>
  );
};

export default CategoryDeleteButton;
