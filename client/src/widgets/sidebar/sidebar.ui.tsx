import React from 'react';

import styles from './sidebar.module.scss';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.Sidebar}>{children}</div>;
};

export default Sidebar;
