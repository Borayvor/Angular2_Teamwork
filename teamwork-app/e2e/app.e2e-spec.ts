import { TeamworkAppPage } from './app.po';

describe('teamwork-app App', function() {
  let page: TeamworkAppPage;

  beforeEach(() => {
    page = new TeamworkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
