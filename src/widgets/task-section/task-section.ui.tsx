import { CategoryHeader } from '@features/category-header-show';
import { CategoryDeleteButton } from '@features/category-delete';
import { TaskList } from '@features/task-list-show';
import { TaskAddInputBar } from '@features/task-add';

import { useCategoryContext } from '@entities/category';

import styles from './task-section.module.scss';

const TaskSection = () => {
  const { selectedCategory } = useCategoryContext();
  // const { isVisible, handleToggle } = useToggleTaskDetail();

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
      {/* {isVisible && <TaskDetail />} */}
    </div>
  );
};

export default TaskSection;
