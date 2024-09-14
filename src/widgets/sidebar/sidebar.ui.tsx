import { CategoryAddButton } from '@features/category-add';
import { CategoryList } from '@features/category-list-show';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <CategoryList />
      <CategoryAddButton />
    </div>
  );
};

export default Sidebar;
