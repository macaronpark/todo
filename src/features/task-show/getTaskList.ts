import { getTaskList as getTaskListFromDB } from '@app/db/task';
import type { TTask } from '@entities/task';

type TArgs = {
  categoryId?: string;
  onSuccess: (taskList: TTask[]) => void;
};

const getTaskList = async ({ categoryId, onSuccess }: TArgs) => {
  if (!categoryId) {
    throw new Error('❌ 카테고리 ID가 필요합니다.');
  }

  try {
    const taskList = await getTaskListFromDB(categoryId);
    onSuccess(taskList);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`❌ 태스크 목록을 불러올 수 없습니다.: ${error.message}`);
    }

    throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
  }
};

export default getTaskList;
