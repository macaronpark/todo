import React from 'react';

import { CategoryAddButton } from '@features/category-add';

import styles from './sidebar.module.scss';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.Sidebar}>
      {children}
      <CategoryAddButton />
    </div>
  );
};

export default Sidebar;
