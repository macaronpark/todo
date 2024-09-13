import styles from './Task.module.scss';

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
