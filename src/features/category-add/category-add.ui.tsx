import { PlusIcon } from '@heroicons/react/20/solid';

import { TEST_ID } from '@shared/test';

import useCategoryAdd from './category-add.hook';
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
      data-testid={TEST_ID.category.addButton}
      onClick={handleCategoryAddButtonClick}
    >
      <PlusIcon className={styles.icon} />
      카테고리 추가
    </button>
  );
};

export default CategoryAddButton;
