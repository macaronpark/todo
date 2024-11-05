import { useEffect } from 'react';

import { Task, useTaskContext } from '@entities/task';

import { useTodoStore } from '@shared/store';

import useTaskListShow from './task-list.hook';
import styles from './task-list.module.scss';

const TaskList = () => {
  const categoryId = useTodoStore((state) => state.selectedCategory?.id);
  const setSelectedTask = useTodoStore((state) => state.setSelectedTask);

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
