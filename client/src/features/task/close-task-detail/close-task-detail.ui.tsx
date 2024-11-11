import { XMarkIcon } from '@heroicons/react/20/solid';

import { useStore } from '@shared/store';

import styles from './close-task-detail.module.scss';

export const CloseTaskDetailButton = () => {
  const setSelectedTask = useStore((state) => state.setSelectedTask);

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
