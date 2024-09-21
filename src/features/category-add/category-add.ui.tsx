import useCategoryAdd from './category-add.api';
import styles from './category-add.module.scss';

type TProps = {
  className?: string;
};

const CategoryAddButton = ({ className }: TProps) => {
  const { addCategory } = useCategoryAdd();

  const handleCategoryAddButtonClick = async () => {
    try {
      await addCategory();
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <button
      className={`${styles.CategoryAddButton} ${className ?? ''}`}
      onClick={handleCategoryAddButtonClick}
    >
      ➕ 카테고리 추가
    </button>
  );
};

export default CategoryAddButton;
