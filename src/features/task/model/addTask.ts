import { addTask as addTaskToDB } from '@db/task';
import { TNewTask } from '@entities/task';

const addTask = async ({
  newTask,
  onSuccess,
}: {
  newTask: TNewTask;
  onSuccess?: () => void;
}) => {
  try {
    await addTaskToDB(newTask);

    onSuccess?.();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`❌ 새 태스크를 만들 수 없습니다.: ${error.message}`);
    }

    throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
  }
};

export default addTask;
