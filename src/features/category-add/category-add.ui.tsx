import { useCategoryContext } from '@app/providers/CategoryProvider';
import styles from './category-add.module.scss';

const CategoryAddButton = () => {
  const { handleAddCategory } = useCategoryContext();

  return (
    <button className={styles.addCategoryButton} onClick={handleAddCategory}>
      + 카테고리 추가
    </button>
  );
};

export default CategoryAddButton;
