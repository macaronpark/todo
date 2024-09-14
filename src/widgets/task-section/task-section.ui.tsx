import { useCallback, useEffect, useState } from 'react';
import { type TTask, Task } from '@entities/task';
import { getTaskList } from '@features/task-list-show';
import { useCategoryContext } from '@app/providers/CategoryProvider';
import { CategoryDeleteButton } from '@features/category-delete';
import { CategoryHeader } from '@features/category-header-show';
import { useToggleTaskDetail, TaskDetail } from '@features/task-detail-show';
import styles from './task-section.module.scss';

const TaskSection = () => {
  const { isVisible, handleToggle } = useToggleTaskDetail();

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
          <CategoryDeleteButton
            onClick={() => handleDeleteCategory(category?.id)}
          />
        </CategoryHeader>
        <div className={styles.list} onClick={handleToggle}>
          {taskList.map((task) => (
            <Task key={task.id} title={task.title} onClick={handleToggle} />
          ))}
          task 영역
        </div>
      </div>
      {isVisible && <TaskDetail />}
    </div>
  );
};

export default TaskSection;
