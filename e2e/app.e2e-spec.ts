import { NgNoteBookPage } from './app.po';

describe('ng-note-book App', function() {
  let page: NgNoteBookPage;

  beforeEach(() => {
    page = new NgNoteBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
