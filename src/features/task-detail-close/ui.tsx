import { useTaskContext } from '@entities/task';
import styles from './ui.module.scss';

const TaskDetailCloseButton = () => {
  const { setSelectedTask } = useTaskContext();

  const handleClose = () => {
    setSelectedTask(undefined);
  };

  return (
    <button
      className={styles.closeButton}
      title="태스크 상세보기 닫기 버튼"
      onClick={handleClose}
    >
      ✖️
    </button>
  );
};

export default TaskDetailCloseButton;
