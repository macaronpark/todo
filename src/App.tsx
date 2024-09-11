import { useCallback, useState } from 'react';
import type { TCategory } from '@entities/category';
import { Sidebar } from '@features/category/ui';
import { TaskSection } from '@features/task/ui';
import styles from './App.module.scss';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<TCategory | null>(
    null
  );

  const handleCategorySelect = useCallback(
    (category: TCategory) => {
      setSelectedCategory(category);
    },
    [setSelectedCategory]
  );

  return (
    <div className={styles.wrapper}>
      <Sidebar
        selectedCategoryId={selectedCategory?.id}
        onCategorySelect={handleCategorySelect}
      />
      <TaskSection
        categoryId={selectedCategory?.id}
        categoryTitle={selectedCategory?.title}
      />
    </div>
  );
}

export default App;
