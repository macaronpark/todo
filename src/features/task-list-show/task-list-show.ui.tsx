import { Task } from '@entities/task';

import useTaskListShow from './task-list-show.hook';
import styles from './task-list-show.module.scss';
import { useEffect } from 'react';

type TProps = {
  categoryId?: number;
};

const TaskList = ({ categoryId }: TProps) => {
  const { taskList, getTaskList } = useTaskListShow();

  useEffect(() => {
    if (!categoryId) return;
    getTaskList(categoryId);
  }, [categoryId]);

  return (
    <div className={styles.wrapper}>
      {taskList.map((task) => (
        <Task key={task.id} title={task.title} onClick={() => {}} />
      ))}
    </div>
  );
};

export default TaskList;
