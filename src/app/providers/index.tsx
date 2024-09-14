import React from 'react';

import { CategoryProvider } from '@entities/category';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CategoryProvider>{children}</CategoryProvider>;
};

export default Providers;
