import { CloseTaskDetailButton } from '@features/task/close-task-detail';
import { DeleteTaskButton } from '@features/task/delete-task';

import { formatDateString } from '@shared/date';

import styles from './task-detail.module.scss';
import { useStore } from '@shared/store';

const TaskDetail = () => {
  const selectedTask = useStore((state) => state.selectedTask);
  if (!selectedTask) return null;

  const { id, title, memo, createdAt, expiredAt, isCompleted } = selectedTask;

  return (
    <div className={styles.TaskDetail}>
      <div className={styles.toolbar}>
        <CloseTaskDetailButton />
      </div>
      <div className={styles.taskWrapper}>
        <div className={styles.titleWrapper}>
          <div
            className={`${styles.isCompleted} ${
              isCompleted ? styles.isChecked : ''
            }`}
          ></div>
          <div className={styles.title}>{title}</div>
        </div>
        <div
          className={`${styles.expiredAt} ${
            expiredAt ? styles.hasExpiredAt : ''
          }`}
        >
          {expiredAt || '기한 설정'}
        </div>
        <textarea className={styles.memo} placeholder="메모 추가">
          {memo}
        </textarea>
      </div>
      <div className={styles.bottomToolbar}>
        <div className={styles.createdAt}>{`${formatDateString(
          createdAt
        )}에 생성됨`}</div>
        <DeleteTaskButton id={id} />
      </div>
    </div>
  );
};

export default TaskDetail;
