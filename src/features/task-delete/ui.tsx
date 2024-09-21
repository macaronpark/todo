import useTaskDelete from './hook';
import styles from './ui.module.scss';

type TProps = {
  id: number;
};

const TaskDeleteButton = ({ id }: TProps) => {

  const handleTaskDeleteButtonClick = async () => {
  };

  return (
    <button
      className={styles.TaskDeleteButton}
      title="태스크 삭제 버튼"
      onClick={handleTaskDeleteButtonClick}
    >
      🗑️
    </button>
  );
};

export default TaskDeleteButton;
