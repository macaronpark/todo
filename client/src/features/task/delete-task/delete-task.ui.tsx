import { TrashIcon } from '@heroicons/react/24/outline';

import { useDeleteTask } from './delete-task.hook';

import styles from './delete-task.module.scss';

type TProps = {
  id: number;
};

export const DeleteTaskButton = ({ id }: TProps) => {
  const { deleteTask } = useDeleteTask();

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
      title="태스크 삭제"
      onClick={handleTaskDeleteButtonClick}
    >
      <TrashIcon className={styles.icon} />
    </button>
  );
};
