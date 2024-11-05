import { AddTaskInputBar } from '@features/task/add-task';

import { NoCategory } from './no-category';
import styles from './task-section.module.scss';
import { useTodoStore } from '@shared/store';

type TProps = {
  children: React.ReactNode;
};

const TaskSection = ({ children }: TProps) => {
  const selectedCategory = useTodoStore((state) => state.selectedCategory);

  if (!selectedCategory) {
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
