import { DonaldRoseResumePage } from './app.po';

describe('donald-rose-resume App', () => {
  let page: DonaldRoseResumePage;

  beforeEach(() => {
    page = new DonaldRoseResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
