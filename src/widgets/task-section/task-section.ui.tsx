import { useCallback, useEffect, useState } from 'react';

import { CategoryHeader } from '@features/category-header-show';
import { CategoryDeleteButton } from '@features/category-delete';
import { TaskList, getTaskList } from '@features/task-list-show';
import { TaskDetail, useToggleTaskDetail } from '@features/task-detail-show';

import { useCategoryContext } from '@entities/category';
import { type TTask, Task } from '@entities/task';

import styles from './task-section.module.scss';

const TaskSection = () => {
  const { selectedCategory, handleDeleteCategory } = useCategoryContext();
  const { isVisible, handleToggle } = useToggleTaskDetail();

  const [taskList, setTaskList] = useState<TTask[]>([]);

  const handleGetTaskList = useCallback(async () => {
    try {
      await getTaskList({
        categoryId: selectedCategory?.id,
        onSuccess: (taskList) => {
          setTaskList(taskList ?? []);
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  }, [selectedCategory?.id]);

  useEffect(() => {
    if (!selectedCategory?.id) return;

    handleGetTaskList();
  }, [selectedCategory?.id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.listWrapper}>
        <CategoryHeader
          categoryId={selectedCategory?.id}
          categoryTitle={selectedCategory?.title}
        >
          <CategoryDeleteButton
            categoryId={selectedCategory?.id}
            onClick={handleDeleteCategory}
          />
        </CategoryHeader>
        <TaskList>
          {taskList.map((task) => (
            <Task key={task.id} title={task.title} onClick={handleToggle} />
          ))}
          task 영역
        </TaskList>
      </div>
      {isVisible && <TaskDetail />}
    </div>
  );
};

export default TaskSection;
