import styles from './Task.module.scss';

type TProps = {
  onClick: () => void;
};

const Task = ({ onClick }: TProps) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      task
    </div>
  );
};

export default Task;
