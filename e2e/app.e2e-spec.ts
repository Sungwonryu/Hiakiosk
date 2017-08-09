import { HiakioskPage } from './app.po';

describe('hiakiosk App', () => {
  let page: HiakioskPage;

  beforeEach(() => {
    page = new HiakioskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to hk!');
  });
});
