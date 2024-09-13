import styles from './Sidebar.module.scss';

type TProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Sidebar = ({ children }: TProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Sidebar;
