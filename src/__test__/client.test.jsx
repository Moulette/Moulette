// testing for the client-side (frontend)
// requirements:
// - the pages should render (2 or 3 including the login page)
// - the tab component for profile + movie archive tabs should work properly
// - upon clicking any of the three buttons at the bottom, new movie should display
// - on click "watched" in the main page, the movie should display under "watched"
// - on click "want to watch" in the main page, the movie should display under the "watch list"

import sum from './sum';

describe('test', () => {
  it('sum', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
