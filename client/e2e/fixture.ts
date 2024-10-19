import { expect, test, type Locator, type Page } from '@playwright/test';

import { TEST_ID } from '@shared/test';

export const mainPageTest = test.extend<{ mainPage: MainPage }>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },
});

export class MainPage {
  readonly page: Page;
  readonly categoryList: Locator;
  readonly categoryAddButton: Locator;
  readonly categoryHeader: Locator;
  readonly addTaskInputBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryList = page.getByTestId(TEST_ID.category.list);
    this.categoryAddButton = page
      .getByTestId(TEST_ID.category.addButton)
      .nth(0);
    this.categoryHeader = page.getByTestId(TEST_ID.category.header);
    this.addTaskInputBar = page.getByTestId(TEST_ID.task.addInputBar);
  }

  async goto() {
    await this.page.goto('/');
  }

  async addCategory({ title }: { title: string }): Promise<Locator> {
    await this.categoryAddButton.click();

    const categoryInput = this.page
      .getByTestId(TEST_ID.category.listItem)
      .nth(-1)
      .locator('input');

    await categoryInput.fill(title);
    await categoryInput.press('Enter');

    const category = this.page
      .getByTestId(TEST_ID.category.listItem)
      .filter({ hasText: title });

    return category;
  }

  async addTask({
    categoryTitle,
    taskTitle,
  }: {
    categoryTitle: string;
    taskTitle: string;
  }) {
    const category = this.page
      .getByTestId(TEST_ID.category.listItem)
      .filter({ hasText: categoryTitle });

    await category.click();
    await expect(this.categoryHeader).toHaveText(categoryTitle);

    const addTaskInput = this.addTaskInputBar.locator('input');
    await addTaskInput.fill(taskTitle);
    await addTaskInput.press('Enter');
  }
}
