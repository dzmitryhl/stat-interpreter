import { StatInterpreterPage } from './app.po';

describe('stat-interpreter App', () => {
  let page: StatInterpreterPage;

  beforeEach(() => {
    page = new StatInterpreterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
