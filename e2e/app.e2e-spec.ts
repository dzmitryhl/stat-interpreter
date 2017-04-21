import { StatInterpretatorPage } from './app.po';

describe('stat-interpretator App', function() {
  let page: StatInterpretatorPage;

  beforeEach(() => {
    page = new StatInterpretatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
