import { doAddStories } from './story';

describe('story action', () => {
  it('add storeis', () => {
    const stories = ['a', 'b'];

    const expectedAction = {
      type: 'STORIES_ADD',
      stories,
    };

    const action = doAddStories(stories);

    expect(action).toEqual(expectedAction);
  });
});
