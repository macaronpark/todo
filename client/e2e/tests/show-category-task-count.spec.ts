import { expect } from '@playwright/test';

import { TEST_ID } from '@shared/test';

import { mainPageTest } from '../fixture';

mainPageTest('새 카테고리의 태스크 수는 `0`이다.', async ({ mainPage }) => {
  await mainPage.goto();

  const category = await mainPage.addCategory({ title: '새 카테고리' });
  const categoryTaskCount = category.getByTestId(TEST_ID.category.taskCount);

  await expect(categoryTaskCount).toHaveText('0');
});

mainPageTest(
  '카테고리에 태스크를 추가하면 카테고리 태스크 수가 1 증가한다.',
  async ({ mainPage }) => {
    await mainPage.goto();

    const categoryTitle = '새 카테고리';
    const category = await mainPage.addCategory({ title: categoryTitle });

    const categoryTaskCount = category.getByTestId(TEST_ID.category.taskCount);
    await expect(categoryTaskCount).toHaveText('0');

    await mainPage.addTask({
      categoryTitle,
      taskTitle: '새 태스크',
    });

    await expect(categoryTaskCount).toHaveText('1');
  }
);

mainPageTest(
  '카테고리를 변경해도 카테고리 태스크 수는 유지된다.',
  async ({ mainPage }) => {
    await mainPage.goto();

    const category1_title = '카테고리_1';
    const category1 = await mainPage.addCategory({ title: category1_title });
    const category1_taskCount = category1.getByTestId(
      TEST_ID.category.taskCount
    );
    await mainPage.addTask({
      categoryTitle: category1_title,
      taskTitle: '새 태스크_1',
    });
    await mainPage.addTask({
      categoryTitle: category1_title,
      taskTitle: '새 태스크_2',
    });

    const category2_title = '카테고리_2';
    const category2 = await mainPage.addCategory({ title: category2_title });
    const category2_taskCount = category2.getByTestId(
      TEST_ID.category.taskCount
    );
    await mainPage.addTask({
      categoryTitle: category2_title,
      taskTitle: '새 태스크_1',
    });

    await category1.click();
    await category2.click();
    await expect(category1_taskCount).toHaveText('2');
    await expect(category2_taskCount).toHaveText('1');
  }
);
