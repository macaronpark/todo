import { expect } from '@playwright/test';

import { mainPageTest } from '../fixture';

mainPageTest(
  '새 카테고리를 추가하면 제목을 바로 수정할 수 있는 상태로 보여진다.',
  async ({ mainPage }) => {
    await mainPage.goto();
    await mainPage.addCategory();

    const isNewCategoryTitleSelected =
      await mainPage.lastCategoryUpdateInput.evaluate(
        (el: HTMLInputElement) => el.selectionStart !== el.selectionEnd
      );

    expect(isNewCategoryTitleSelected).toBeTruthy();
  }
);

mainPageTest(
  '새 카테고리를 추가하면 태스크 섹션에 해당 카테고리가 선택되어 보여진다.',
  async ({ mainPage }) => {
    await mainPage.goto();
    await mainPage.addCategory();

    const NEW_TITLE = '새 카테고리 제목';
    await mainPage.updateCategoryTitle(NEW_TITLE);

    await expect(
      mainPage.categoryHeaderButton.filter({ hasText: NEW_TITLE })
    ).toContainText(NEW_TITLE);
  }
);

mainPageTest(
  '새 카테고리 제목을 초기 제목과 동일한 상태로 Enter로 확정하면 카테고리 제목은 `새 카테고리`로 보여진다.',
  async ({ mainPage }) => {
    await mainPage.goto();
    await mainPage.addCategory();

    const title = await mainPage.lastCategoryUpdateInput?.inputValue();
    await mainPage.updateCategoryTitle(title);

    await expect(mainPage.lastCategoryButton).toContainText('새 카테고리');
  }
);

mainPageTest(
  '새 카테고리 제목을 수정하고 Enter로 확정하면 카테고리 제목은 수정한 제목으로 보여진다.',
  async ({ mainPage }) => {
    await mainPage.goto();
    await mainPage.addCategory();

    const NEW_TITLE = '새 카테고리 제목';
    await mainPage.updateCategoryTitle(NEW_TITLE);

    await expect(mainPage.lastCategoryButton).toContainText(NEW_TITLE);
  }
);
