import { PlusIcon } from '@heroicons/react/20/solid';

import { useCategoryContext } from '@entities/category';

import { useAddTask } from './add-task.hook';
import styles from './add-task.module.scss';

export const AddTaskInputBar = () => {
  const { selectedCategory } = useCategoryContext();
  const { addTask } = useAddTask();

  const handleInputKeyDown = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      const input = e.target as HTMLInputElement;
      const newTaskTitle = input.value.trim();

      if (!newTaskTitle) return;
      if (!selectedCategory?.id) return;

      try {
        const newTask = {
          categoryId: selectedCategory.id,
          title: newTaskTitle,
          createdAt: new Date().toISOString(),
          expiredAt: undefined,
          isCompleted: false,
          memo: undefined,
        };

        await addTask({ newTask });
      } catch (error) {
        if (error instanceof Error) {
          window.alert(error.message);
        }
      }

      input.value = '';
    }
  };

  return (
    <div className={styles.TaskAddInputBar}>
      <div className={styles.inputWrapper}>
        <PlusIcon className={styles.icon} />
        <input
          type="text"
          placeholder="태스크 추가"
          onKeyDown={handleInputKeyDown}
        />
      </div>
    </div>
  );
};
