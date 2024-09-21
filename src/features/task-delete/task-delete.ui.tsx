import useTaskDelete from './task-delete.hook';
import styles from './task-delete.module.scss';

type TProps = {
  id: number;
};

const TaskDeleteButton = ({ id }: TProps) => {
  const { deleteTask } = useTaskDelete();

  const handleTaskDeleteButtonClick = async () => {
    try {
      await deleteTask(id);
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
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
