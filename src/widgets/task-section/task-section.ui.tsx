import { CategoryHeader } from '@features/category-header-show';
import { CategoryDeleteButton } from '@features/category-delete';
import { TaskList } from '@features/task-list-show';
import { TaskAddInputBar } from '@features/task-add';

import { NoCategory } from './no-category';
import styles from './task-section.module.scss';

type TProps = {
  selectedCategoryId?: number;
  selectedCategoryTitle?: string;
};

const TaskSection = ({ selectedCategoryId, selectedCategoryTitle }: TProps) => {
  if (!selectedCategoryId) {
    return <NoCategory />;
  }

  return (
    <div className={styles.TaskSection}>
      {selectedCategoryId && (
        <>
          <CategoryHeader
            categoryId={selectedCategoryId}
            categoryTitle={selectedCategoryTitle}
          >
            <CategoryDeleteButton
              categoryId={selectedCategoryId}
              categoryTitle={selectedCategoryTitle}
            />
          </CategoryHeader>
          <TaskList categoryId={selectedCategoryId} />
          <TaskAddInputBar />
        </>
      )}
    </div>
  );
};

export default TaskSection;
