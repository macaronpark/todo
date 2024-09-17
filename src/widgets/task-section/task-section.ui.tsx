import { CategoryHeader } from '@features/category-header-show';
import { CategoryDeleteButton } from '@features/category-delete';
import { TaskList } from '@features/task-list-show';
import { TaskAddInputBar } from '@features/task-add';
import { TaskDetail } from '@features/task-detail-show';

import { useCategoryContext } from '@entities/category';
import { useTaskContext } from '@entities/task';

import styles from './task-section.module.scss';

const TaskSection = () => {
  const { selectedCategory } = useCategoryContext();
  const { selectedTask } = useTaskContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.listWrapper}>
        {selectedCategory && (
          <>
            <CategoryHeader
              categoryId={selectedCategory?.id}
              categoryTitle={selectedCategory?.title}
            >
              <CategoryDeleteButton categoryId={selectedCategory?.id} />
            </CategoryHeader>
            <TaskList categoryId={selectedCategory?.id} />
            <TaskAddInputBar />
          </>
        )}
      </div>
      {selectedTask && (
        <TaskDetail
          title={selectedTask.title}
          createdAt={selectedTask.createdAt}
          expiredAt={selectedTask?.expiredAt}
          isCompleted={selectedTask.isCompleted}
          memo={selectedTask?.memo}
        />
      )}
    </div>
  );
};

export default TaskSection;
