export type { TNewTask, TTask } from './task.type';
export { default as Task } from './task.ui';
export {
  getTaskListFromDB,
  addTaskToDB,
  updateTaskToDB,
  deleteTaskFromDB,
} from './task.db';
