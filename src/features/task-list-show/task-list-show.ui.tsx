import { Task, TTask, useTaskContext } from '@entities/task';

import useTaskListShow from './task-list-show.hook';
import styles from './task-list-show.module.scss';
import { useEffect } from 'react';

type TProps = {
  categoryId?: number;
};

const TaskList = ({ categoryId }: TProps) => {
  const { getTaskList } = useTaskListShow();
  const { taskList, setSelectedTask } = useTaskContext();

  const handleTaskClick = (task: TTask) => {
    setSelectedTask((prevTask) => {
      if (prevTask?.id === task.id) {
        return undefined;
      }

      return task;
    });
  };

  useEffect(() => {
    if (!categoryId) return;
    getTaskList(categoryId);
  }, [categoryId]);

  return (
    <div className={styles.wrapper}>
      {taskList.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          onClick={() => handleTaskClick(task)}
        />
      ))}
    </div>
  );
};

export default TaskList;
