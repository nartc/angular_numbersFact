import { NumbersFactPage } from './app.po';

describe('numbers-fact App', () => {
  let page: NumbersFactPage;

  beforeEach(() => {
    page = new NumbersFactPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
