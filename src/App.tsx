import { useState } from 'react';
import styles from './App.module.scss';
import { CategorySideBar, Task, TaskDetail, TaskList } from '@ui';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={styles.wrapper}>
      <CategorySideBar />
      <TaskList>
        <Task onClick={toggleSidebar} />
        <Task onClick={toggleSidebar} />
      </TaskList>
      {isSidebarVisible && <TaskDetail />}
    </div>
  );
}

export default App;
