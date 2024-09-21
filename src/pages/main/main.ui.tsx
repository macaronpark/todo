import { Sidebar } from '@widgets/sidebar';
import { TaskSection } from '@widgets/task-section';
import { TaskDetail } from '@widgets/task-detail';

import { useCategoryContext } from '@entities/category';
import { useTaskContext } from '@entities/task';

import styles from './main.module.scss';

const MainPage = () => {
  const { selectedCategory } = useCategoryContext();
  const { selectedTask } = useTaskContext();

  return (
    <div className={styles.MainPage}>
      <Sidebar />
      <div className={styles.taskWrapper}>
        <TaskSection
          selectedCategoryId={selectedCategory?.id}
          selectedCategoryTitle={selectedCategory?.title}
        />
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
