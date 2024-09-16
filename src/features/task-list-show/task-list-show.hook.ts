import { type TTask, getTaskListFromDB, useTaskContext } from '@entities/task';

const useTaskListShow = () => {
  const { taskList, setTaskList } = useTaskContext();

  const getTaskList = async (categoryId: string) => {
    try {
      const taskList = await getTaskListFromDB(categoryId);
      handleSuccess(taskList);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `❌ 태스크 목록을 불러올 수 없습니다.: ${error.message}`
        );
      }

      throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
    }
  };

  const handleSuccess = (taskList: TTask[]) => {
    setTaskList(taskList);
  };

  return {
    taskList,
    getTaskList,
  };
};

export default useTaskListShow;
