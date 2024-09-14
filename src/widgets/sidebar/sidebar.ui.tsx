import { AddCategoryButton } from '@features/category-add';
import { CategoryList } from '@features/category-show';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <CategoryList />
      <AddCategoryButton />
    </div>
  );
};

export default Sidebar;
