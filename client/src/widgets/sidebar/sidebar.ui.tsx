import React from 'react';

import { AddCategoryButton } from '@features/category/add-category';

import styles from './sidebar.module.scss';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.Sidebar}>
      {children}
      <AddCategoryButton />
    </div>
  );
};

export default Sidebar;
