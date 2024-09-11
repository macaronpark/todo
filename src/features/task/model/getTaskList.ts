import { getTaskList as getTaskListFromDB } from '@db/task';

const getTaskList = async (categoryId: string) => {
  try {
    const taskList = await getTaskListFromDB(categoryId);
    return taskList;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`❌ 태스크 목록을 불러올 수 없습니다.: ${error.message}`);
    }

    throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
  }
};

export default getTaskList;
