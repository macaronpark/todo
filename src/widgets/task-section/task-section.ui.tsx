import { CategoryHeader } from '@features/category-header-show';
import { CategoryDeleteButton } from '@features/category-delete';
import { TaskList } from '@features/task-list-show';
import { TaskAddInputBar } from '@features/task-add';
import styles from './task-section.module.scss';

type TProps = {
  selectedCategoryId?: number;
  selectedCategoryTitle?: string;
};

const TaskSection = ({ selectedCategoryId, selectedCategoryTitle }: TProps) => {
  return (
    <div className={styles.wrapper}>
      {selectedCategoryId && (
        <>
      <CategoryHeader
        categoryId={selectedCategoryId}
        categoryTitle={selectedCategoryTitle}
      >
        <CategoryDeleteButton categoryId={selectedCategoryId} />
      </CategoryHeader>
      <TaskList categoryId={selectedCategoryId} />
      <TaskAddInputBar />
        </>
      )}
    </div>
  );
};

export default TaskSection;
