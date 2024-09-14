import styles from './task-list-show.module.scss';
import React from 'react';

const TaskList = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default TaskList;
