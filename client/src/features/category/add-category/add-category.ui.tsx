import { PlusIcon } from '@heroicons/react/20/solid';

import { TEST_ID } from '@shared/test';

import useCategoryAdd from './add-category.hook';
import styles from './add-category.module.scss';

type TProps = {
  className?: string;
};

export const AddCategoryButton = ({ className }: TProps) => {
  const { addCategory } = useCategoryAdd();

  const handleAddCategoryButtonClick = async () => {
    try {
      await addCategory();
    } catch (error) {
      window.alert(error);
    }
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
