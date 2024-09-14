import styles from './category-delete.module.scss';

type TProps = {
  categoryId?: string;
  onClick: (categoryId: string) => void;
};

const CategoryDeleteButton = ({ categoryId, onClick }: TProps) => {
  const handleCategoryDeleteButtonClick = () => {
    if (!categoryId) return;
    onClick(categoryId);
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
