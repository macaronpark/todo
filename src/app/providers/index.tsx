import React from 'react';

import { CategoryProvider } from '@entities/category';
import { TaskProvider } from '@entities/task';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CategoryProvider>
      <TaskProvider>{children}</TaskProvider>
    </CategoryProvider>
  );
};

export default Providers;
