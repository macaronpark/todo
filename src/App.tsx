import { useState } from 'react';
import styles from './App.module.scss';
import { CategorySideBar, TaskDetail, TaskList } from './ui';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={styles.wrapper}>
      <CategorySideBar />
      <TaskList onClick={toggleSidebar} />
      {isSidebarVisible && <TaskDetail />}
    </div>
  );
}

export default App;
