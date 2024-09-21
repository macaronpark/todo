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
    >
      삭제
    </button>
  );
};

export default CategoryDeleteButton;
