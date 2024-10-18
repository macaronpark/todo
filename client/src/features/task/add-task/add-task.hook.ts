import {
  type TNewTask,
  TTask,
  addTaskToDB,
  useTaskContext,
} from '@entities/task';

export const useAddTask = () => {
  const { taskList, setTaskList } = useTaskContext();

  const addTask = async ({ newTask }: { newTask: TNewTask }) => {
    try {
      const task = await addTaskToDB(newTask);
      handleSuccess(task);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`❌ 새 태스크를 만들 수 없습니다.: ${error.message}`);
      }

      throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
    }
  };

  const handleSuccess = (task: TTask) => {
    setTaskList([...taskList, task]);
  };

  return {
    addTask,
  };
};
