import { useEffect } from 'react';

import { Task, useTaskContext } from '@entities/task';

import { useStore } from '@shared/store';

import useTaskListShow from './task-list.hook';
import styles from './task-list.module.scss';

const TaskList = () => {
  const categoryId = useStore((state) => state.selectedCategory?.id);
  const setSelectedTask = useStore((state) => state.setSelectedTask);

  const { taskList } = useTaskContext();
  const { getTaskList } = useTaskListShow();

  useEffect(() => {
    if (!categoryId) return;
    getTaskList(categoryId);
  }, [categoryId]);

  return (
    <div className={styles.TaskList}>
      {taskList.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          onClick={() => setSelectedTask(task)}
        />
      ))}
    </div>
  );
};

export default TaskList;
