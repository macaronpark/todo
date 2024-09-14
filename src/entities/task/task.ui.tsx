import styles from './task.module.scss';

type TProps = {
  title: string;
  onClick: () => void;
};

const Task = ({ title, onClick }: TProps) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      {title}
    </div>
  );
};

export default Task;