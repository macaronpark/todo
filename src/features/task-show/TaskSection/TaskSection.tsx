import { useCallback, useEffect, useState } from 'react';
import { type TTask, Task } from '@entities/task';
import { getTaskList } from '@features/task-show';
import styles from './TaskSection.module.scss';
import TaskDetail from '../TaskDetail';
import { useCategoryContext } from '@app/providers/CategoryProvider';
import { CategoryHeader } from '@features/category-show';
import { DeleteCategoryButton } from '@features/category-delete';
import { useToggleSidebar } from '@features/sidebar-toggle';

const TaskSection = () => {
  const { isSidebarVisible, toggleSidebar } = useToggleSidebar();

  const { selectedCategory: category, handleDeleteCategory } =
    useCategoryContext();

  const [taskList, setTaskList] = useState<TTask[]>([]);

  const handleGetTaskList = useCallback(async () => {
    try {
      await getTaskList({
        categoryId: category?.id,
        onSuccess: (taskList) => {
          setTaskList(taskList ?? []);
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  }, [category?.id]);

  useEffect(() => {
    if (!category?.id) return;
    handleGetTaskList();
  }, [category?.id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.listWrapper}>
        <CategoryHeader id={category?.id} title={category?.title}>
          <DeleteCategoryButton
            onClick={() => handleDeleteCategory(category?.id)}
          />
        </CategoryHeader>
        <div className={styles.list} onClick={toggleSidebar}>
          {taskList.map((task) => (
            <Task key={task.id} title={task.title} onClick={toggleSidebar} />
          ))}
          task 영역
        </div>
      </div>
      {isSidebarVisible && <TaskDetail />}
    </div>
  );
};

export default TaskSection;
