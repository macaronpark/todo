import { type Locator, type Page } from '@playwright/test';
import { TEST_ID } from '../src/shared/test';

export class MainPage {
  readonly page: Page;
  readonly categoryAddButton: Locator;
  readonly categoryList: Locator;

  constructor(page: Page) {
    this.page = page;

    this.categoryList = page.getByTestId(TEST_ID.category.list);
    this.categoryAddButton = page
      .getByTestId(TEST_ID.category.addButton)
      .nth(0);
  }

  async goto() {
    await this.page.goto('');
  }

  async addCategory() {
    await this.categoryAddButton.click();
  }
}
