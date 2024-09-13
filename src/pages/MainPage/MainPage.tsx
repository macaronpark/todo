import { AddCategoryButton } from '@features/category-add';
import { CategoryList } from '@features/category-show';
import { TaskSection } from '@features/task-show';
import { Sidebar } from '@features/sidebar-toggle';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar>
        <CategoryList />
        <AddCategoryButton />
      </Sidebar>
      <TaskSection />
    </div>
  );
};

export default MainPage;
