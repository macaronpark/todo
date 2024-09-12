import { useCallback, useEffect, useState } from 'react';
import type { TTask } from '@entities/task';
import { useToggleSidebar, getTaskList } from '@features/task/model';
import styles from './TaskSection.module.scss';
import TaskDetail from '../TaskDetail';
import Task from '../Task';

type TProps = {
  categoryId?: string;
  categoryTitle?: string;
};

const TaskSection = ({ categoryId, categoryTitle }: TProps) => {
  const { isSidebarVisible, toggleSidebar } = useToggleSidebar();

  const [taskList, setTaskList] = useState<TTask[]>([]);

  const queryTaskList = useCallback(async () => {
    if (!categoryId) return;

    try {
      const taskList = await getTaskList(categoryId);
      setTaskList(taskList ?? []);
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  }, [categoryId]);

  useEffect(() => {
    if (!categoryId) return;

    queryTaskList();
  }, [categoryId]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.listWrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            {categoryId ? `${categoryTitle} (#${categoryId})` : '-'}
          </h3>
          <button className={styles.deleteCategoryButton}>삭제</button>
        </div>
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
