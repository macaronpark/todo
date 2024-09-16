import useCategoryDelete from './category-delete.hook';
import styles from './category-delete.module.scss';

type TProps = {
  categoryId?: string;
};

const CategoryDeleteButton = ({ categoryId }: TProps) => {
  const { deleteCategory } = useCategoryDelete();

  const handleCategoryDeleteButtonClick = () => {
    if (!categoryId) return;
    deleteCategory(categoryId);
  };

  return (
    <button
      className={styles.deleteCategoryButton}
      onClick={handleCategoryDeleteButtonClick}
    >
      삭제
    </button>
  );
};

export default CategoryDeleteButton;
