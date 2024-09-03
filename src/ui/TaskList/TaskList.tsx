import { ReactElement } from 'react';
import styles from './TaskList.module.scss';

type TProps = {
  children: ReactElement | ReactElement[];
};

const TaskList = ({ children }: TProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default TaskList;
