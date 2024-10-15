import { test as base } from '@playwright/test';

import { MainPage } from './main-page';

export const test = base.extend<{ mainPage: MainPage }>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);

    await mainPage.goto();

    await use(mainPage);
  },
});
