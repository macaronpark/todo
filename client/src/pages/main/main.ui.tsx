import { Sidebar } from '@widgets/sidebar';
import { CategoryList } from '@widgets/category-list';
import { CategoryHeader } from '@widgets/category-header';
import { TaskSection } from '@widgets/task-section';
import { TaskList } from '@widgets/task-list';
import { TaskDetail } from '@widgets/task-detail';

import { useCategoryContext } from '@entities/category';
import { useTaskContext } from '@entities/task';

import styles from './main.module.scss';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from './main.api';

const MainPage = () => {
  const {
    data: categoryList,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  console.log(categoryList, isPending, isError);

  const { selectedCategory } = useCategoryContext();
  const { selectedTask } = useTaskContext();

  return (
    <div className={styles.MainPage}>
      <Sidebar>
        <CategoryList />
      </Sidebar>
      <div className={styles.taskWrapper}>
        <TaskSection
          selectedCategoryId={selectedCategory?.id}
          selectedCategoryTitle={selectedCategory?.title}
        >
          <CategoryHeader
            selectedCategoryId={selectedCategory?.id}
            selectedCategoryTitle={selectedCategory?.title}
          />
          <TaskList categoryId={selectedCategory?.id} />
        </TaskSection>
        {selectedTask && (
          <TaskDetail
            id={selectedTask.id}
            title={selectedTask.title}
            createdAt={selectedTask.createdAt}
            expiredAt={selectedTask?.expiredAt}
            isCompleted={selectedTask.isCompleted}
            memo={selectedTask?.memo}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
