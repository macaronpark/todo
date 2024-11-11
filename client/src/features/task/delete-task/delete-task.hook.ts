import { deleteTaskFromDB, useTaskContext } from '@entities/task';

import { useStore } from '@shared/store';

export const useDeleteTask = () => {
  const { setTaskList } = useTaskContext();
  const setSelectedTask = useStore((state) => state.setSelectedTask);

  const deleteTask = async (taskId: number) => {
    try {
      await deleteTaskFromDB(taskId);
      handleSuccess(taskId);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`❌ 태스크를 삭제할 수 없습니다.: ${error.message}`);
      }

      throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
    }
  };

  const handleSuccess = (taskId: number) => {
    setTaskList((prev) => prev.filter((category) => category.id !== taskId));
    setSelectedTask(null);
  };

  return { deleteTask };
};
