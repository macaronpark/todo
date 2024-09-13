import React from 'react';
import { CategoryProvider } from './CategoryProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CategoryProvider>{children}</CategoryProvider>;
};

export default Providers;
