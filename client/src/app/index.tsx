import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { MainPage } from '@pages/main';

import Providers from './providers';
import './reset.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <MainPage />
    </Providers>
  </StrictMode>
);
