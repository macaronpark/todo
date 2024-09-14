import { Sidebar } from '@widgets/sidebar';
import { TaskSection } from '@widgets/task-section';
import styles from './main.module.scss';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <TaskSection />
    </div>
  );
};

export default MainPage;
