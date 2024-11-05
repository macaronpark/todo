import { XMarkIcon } from '@heroicons/react/20/solid';

import { useTodoStore } from '@shared/store';

import styles from './close-task-detail.module.scss';

export const CloseTaskDetailButton = () => {
  const setSelectedTask = useTodoStore((state) => state.setSelectedTask);

  return (
    <button
      className={styles.TaskDetailCloseButton}
      title="태스크 상세보기 닫기"
      onClick={() => setSelectedTask(null)}
    >
      <XMarkIcon className={styles.icon} />
    </button>
  );
};
