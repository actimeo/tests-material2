import { TestsMaterial2Page } from './app.po';

describe('tests-material2 App', function() {
  let page: TestsMaterial2Page;

  beforeEach(() => {
    page = new TestsMaterial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
