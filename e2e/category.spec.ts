import { test, expect } from '@playwright/test';
import { MainPage } from './main-page';

test('새 카테고리 추가', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.goto();
  await mainPage.addCategory();

  await expect(mainPage.categoryList).toContainText('새 카테고리');
});
