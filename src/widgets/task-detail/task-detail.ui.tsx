import { TTask } from '@entities/task';

import styles from './task-detail.module.scss';

type TProps = Omit<TTask, 'id' | 'categoryId'>;

const TaskDetail = ({
  title,
  createdAt,
  expiredAt,
  isCompleted,
  memo,
}: TProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <button
          className={styles.closeButton}
          title="태스크 상세보기 닫기 버튼"
        >
          ✖️
        </button>
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
        <div className={styles.createdAt}>{createdAt}</div>
        <button className={styles.deleteButton} title="태스크 삭제 버튼">
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
