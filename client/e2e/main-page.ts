import { type Locator, type Page } from '@playwright/test';
import { TEST_ID } from '../src/shared/test';

export class MainPage {
  readonly page: Page;
  readonly categoryList: Locator;
  readonly categoryAddButton: Locator;

  private lastCategory: Locator;
  readonly lastCategoryUpdateInput: Locator;
  readonly lastCategoryButton: Locator;

  private categoryHeader: Locator;
  readonly categoryHeaderUpdateInput: Locator;
  readonly categoryHeaderButton: Locator;

  constructor(page: Page) {
    this.page = page;

    const testId = TEST_ID.category;

    this.categoryList = page.getByTestId(testId.list);
    this.categoryAddButton = page.getByTestId(testId.addButton).nth(0);

    this.lastCategory = page.getByTestId(testId.listItem).nth(-1);
    this.lastCategoryUpdateInput = this.lastCategory.locator('input');
    this.lastCategoryButton = this.lastCategory.locator('button');

    this.categoryHeader = page.getByTestId(testId.header);
    this.categoryHeaderUpdateInput = this.categoryHeader.locator('input');
    this.categoryHeaderButton = this.categoryHeader.locator('button');
  }

  async goto() {
    await this.page.goto('');
  }

  async addCategory() {
    await this.categoryAddButton.click();
  }

  async updateCategoryTitle(title: string) {
    await this.lastCategoryUpdateInput.fill(title);
    await this.lastCategoryUpdateInput.press('Enter');
  }
}
