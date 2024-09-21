import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Providers from '@app/providers';
import { MainPage } from '@pages';

import './reset.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <MainPage />
    </Providers>
  </StrictMode>
);
