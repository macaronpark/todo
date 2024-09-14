import styles from './task-add.module.scss';

const TaskAddInputBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <div className={styles.icon}>➕</div>
        <input type="text" placeholder="태스크 추가" />
      </div>
    </div>
  );
};

export default TaskAddInputBar;
