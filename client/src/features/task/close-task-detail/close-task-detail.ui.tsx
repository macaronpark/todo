import { XMarkIcon } from '@heroicons/react/20/solid';

import { useTaskContext } from '@entities/task';

import styles from './close-task-detail.module.scss';

export const CloseTaskDetailButton = () => {
  const { setSelectedTask } = useTaskContext();

  const handleClose = () => {
    setSelectedTask(undefined);
  };

  return (
    <button
      className={styles.TaskDetailCloseButton}
      title="태스크 상세보기 닫기"
      onClick={handleClose}
    >
      <XMarkIcon className={styles.icon} />
    </button>
  );
};
