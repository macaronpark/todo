import { useCallback, useEffect, useState } from 'react';

import { getTaskListFromDB, useTaskContext } from '@entities/task';

import styles from './show-category-task-count.module.scss';
import { TEST_ID } from '@shared/test';

type TProps = {
  categoryId: number;
  isSelected: boolean;
};

export const CategoryTaskCount = ({ categoryId, isSelected }: TProps) => {
  const { taskList } = useTaskContext();

  const [taskCount, setTaskCount] = useState<number | null>(null);

  const getTaskCount = useCallback(async () => {
    try {
      const taskList = await getTaskListFromDB(categoryId);
      setTaskCount(taskList.length);
    } catch (error) {
      setTaskCount(0);
    }
  }, [categoryId]);

  useEffect(() => {
    getTaskCount();
  }, [getTaskCount]);

  useEffect(() => {
    if (isSelected) {
      setTaskCount(taskList.length);
    }
  }, [taskList.length]);

  // todo:
  // 현재 전역 상태 구조 상
  // selectedCategory의 태스크 수는 taskList를,
  // 그 외 카테고리의 태스크 수는 DB에서 가져온다.
  // 상태 관리 방식을 변경할 예정이어서 우선은 이렇게 구현함.
  const count = isSelected ? taskList.length : taskCount;

  return (
    <div
      className={styles.CategoryTaskCount}
      data-testid={TEST_ID.category.taskCount}
    >
      {count}
    </div>
  );
};
