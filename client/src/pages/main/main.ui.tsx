import { useQuery } from '@tanstack/react-query';

import { Sidebar } from '@widgets/sidebar';
import { CategoryList } from '@widgets/category-list';
import { CategoryHeader } from '@widgets/category-header';
import { TaskSection } from '@widgets/task-section';
import { TaskList } from '@widgets/task-list';
import { TaskDetail } from '@widgets/task-detail';

import { AddCategoryButton } from '@features/category/add-category';

import styles from './main.module.scss';
import { fetchCategories } from './main.api';
import { QUERY_KEY } from '@shared/react-query/key';

const MainPage = () => {
  const { data: categoryList, error } = useQuery({
    queryKey: QUERY_KEY.categoryList,
    queryFn: fetchCategories,
    initialData: [],
  });

  if (error) {
    window.alert(`❌ 카테고리 목록을 불러올 수 없습니다.: ${error.message}`);
  }

  return (
    <div className={styles.MainPage}>
      <Sidebar>
        <CategoryList categoryList={categoryList} />
        <AddCategoryButton />
      </Sidebar>
      <div className={styles.taskWrapper}>
        <TaskSection>
          <CategoryHeader />
          <TaskList />
        </TaskSection>
        <TaskDetail />
      </div>
    </div>
  );
};

export default MainPage;
