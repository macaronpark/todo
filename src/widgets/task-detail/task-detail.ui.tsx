import { TaskDetailCloseButton } from '@features/task-detail-close';
import { TaskDeleteButton } from '@features/task-delete';

import { TTask } from '@entities/task';

import styles from './task-detail.module.scss';
import { formatDateString } from '@shared/date';

type TProps = Omit<TTask, 'categoryId'>;

const TaskDetail = ({
  id,
  title,
  createdAt,
  expiredAt,
  isCompleted,
  memo,
}: TProps) => {
  return (
    <div className={styles.TaskDetail}>
      <div className={styles.toolbar}>
        <TaskDetailCloseButton />
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
        <TaskDeleteButton id={id} />
      </div>
    </div>
  );
};

export default TaskDetail;
