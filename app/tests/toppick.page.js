import { Selector } from 'testcafe';

class TodayTopPickPage {
  constructor() {
    this.pageId = '#todaytoppick-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const todayTopPickPage = new TodayTopPickPage();
