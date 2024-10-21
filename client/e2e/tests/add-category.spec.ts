import { expect } from '@playwright/test';

import { TEST_ID } from '@shared/test';

import { mainPageTest } from '../fixture';

mainPageTest(
  '새 카테고리를 추가하면 제목을 바로 수정할 수 있는 상태로 보여진다.',
  async ({ mainPage }) => {
    await mainPage.goto();
    await mainPage.categoryAddButton.click();

    const categoryInput = mainPage.page
      .getByTestId(TEST_ID.category.listItem)
      .nth(-1)
      .locator('input');

    const isNewCategoryTitleSelected = await categoryInput.evaluate(
      (el: HTMLInputElement) => el.selectionStart !== el.selectionEnd
    );

    expect(isNewCategoryTitleSelected).toBeTruthy();
  }
);

mainPageTest(
  '새 카테고리를 추가하면 태스크 섹션에 해당 카테고리가 선택되어 보여진다.',
  async ({ mainPage }) => {
    await mainPage.goto();

    const title = '새 카테고리 제목';
    await mainPage.addCategory({ title });

    await expect(
      mainPage.categoryHeader.locator('button').filter({ hasText: title })
    ).toContainText(title);
  }
);

mainPageTest(
  '새 카테고리 제목을 초기 제목과 동일한 상태로 Enter로 확정하면 카테고리 제목은 `새 카테고리`로 보여진다.',
  async ({ mainPage }) => {
    await mainPage.goto();
    await mainPage.categoryAddButton.click();

    const category = mainPage.page
      .getByTestId(TEST_ID.category.listItem)
      .nth(-1);
    const categoryButton = category.locator('button');
    const categoryInput = category.locator('input');
    await categoryInput.press('Enter');

    await expect(categoryButton).toContainText('새 카테고리');
  }
);

mainPageTest(
  '새 카테고리 제목을 수정하고 Enter로 확정하면 카테고리 제목은 수정한 제목으로 보여진다.',
  async ({ mainPage }) => {
    await mainPage.goto();

    const NEW_TITLE = '새 카테고리 제목';
    const category = await mainPage.addCategory({ title: NEW_TITLE });
    const categoryButton = category.locator('button');

    await expect(categoryButton).toContainText(NEW_TITLE);
  }
);
