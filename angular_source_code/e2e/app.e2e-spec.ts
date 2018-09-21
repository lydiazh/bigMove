import { TheBigMovePage } from './app.po';

describe('the-big-move App', () => {
  let page: TheBigMovePage;

  beforeEach(() => {
    page = new TheBigMovePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
