import { Selector } from 'testcafe';

class ListAllVendorsPage {
  constructor() {
    this.pageId = '#listallvendor-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listAllVendorsPage = new ListAllVendorsPage();
