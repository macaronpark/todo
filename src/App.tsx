import { useState } from 'react';
import styles from './App.module.scss';
import { CategorySidebar } from '@features/category/ui';
import { Task, TaskDetail, TaskList } from '@features/task/ui';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={styles.wrapper}>
      <CategorySidebar />
      <TaskList>
        <Task onClick={toggleSidebar} />
        <Task onClick={toggleSidebar} />
      </TaskList>
      {isSidebarVisible && <TaskDetail />}
    </div>
  );
}

export default App;
