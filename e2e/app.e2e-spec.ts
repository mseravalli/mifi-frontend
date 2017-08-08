import { MifiFrontendPage } from './app.po';

describe('mifi-frontend App', () => {
  let page: MifiFrontendPage;

  beforeEach(() => {
    page = new MifiFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
