import { useCategoryContext } from '@entities/category';

import useTaskAdd from './task-add.hook';
import styles from './task-add.module.scss';

const TaskAddInputBar = () => {
  const { selectedCategory } = useCategoryContext();
  const { addTask } = useTaskAdd();

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
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <div className={styles.icon}>➕</div>
        <input
          type="text"
          placeholder="태스크 추가"
          onKeyDown={handleInputKeyDown}
        />
      </div>
    </div>
  );
};

export default TaskAddInputBar;
