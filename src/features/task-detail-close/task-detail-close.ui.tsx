import { useTaskContext } from '@entities/task';
import styles from './task-detail-close.module.scss';

const TaskDetailCloseButton = () => {
  const { setSelectedTask } = useTaskContext();

  const handleClose = () => {
    setSelectedTask(undefined);
  };

  return (
    <button
      className={styles.TaskDetailCloseButton}
      title="태스크 상세보기 닫기 버튼"
      onClick={handleClose}
    >
      ✖️
    </button>
  );
};

export default TaskDetailCloseButton;