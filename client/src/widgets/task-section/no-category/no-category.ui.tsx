import { AddCategoryButton } from '@features/category/add-category';

import styles from './no-category.module.scss';

const NoCategory = () => {
  return (
    <div className={styles.NoCategory}>
      <div className={styles.image}>😶‍🌫️</div>
      <div className={styles.desc}>
        카테고리를 추가하고
        <br />
        태스크를 관리해보세요.
      </div>
      <AddCategoryButton className={styles.categoryAddButton} />
    </div>
  );
};

export default NoCategory;
