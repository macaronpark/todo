import { AddTaskInputBar } from '@features/task/add-task';

import { NoCategory } from './no-category';
import styles from './task-section.module.scss';

type TProps = {
  selectedCategoryId?: number;
  selectedCategoryTitle?: string;
  children: React.ReactNode;
};

const TaskSection = ({
  selectedCategoryId,
  selectedCategoryTitle,
  children,
}: TProps) => {
  if (!selectedCategoryId || !selectedCategoryTitle) {
    return (
      <div className={styles.TaskSection}>
        <NoCategory />
      </div>
    );
  }

  return (
    <div className={styles.TaskSection}>
      {children}
      <AddTaskInputBar />
    </div>
  );
};

export default TaskSection;
