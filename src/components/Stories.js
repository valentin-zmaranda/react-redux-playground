import React from 'react';
import { connect } from 'react-redux';

import {
  getReadableStories,
  getFetchError,
} from '../selectors/story';

import './Stories.css';

import Story from './Story';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
};

const StoriesHeader = ({ columns }) => (
  <div className="stories-header">
    {Object.keys(columns).map(key => (
      <span key={key} style={{ width: columns[key].width }}>
        {columns[key].label}
      </span>
    ))}
  </div>
);

const Stories = ({ stories, error }) => {
  return (
    <div className="stories">
      <StoriesHeader columns={COLUMNS} />
      {error && <p className="error">Something went wrogn....</p>}
      {(stories || []).map(story => (
        <Story key={story.objectID} story={story} columns={COLUMNS} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  stories: getReadableStories(state),
  error: getFetchError(state),
});

// const mapDispatchToProps = dispatch => ({
//   onArchive : id =>dispatch(doArchiveStory(id))
// })

export default connect(mapStateToProps)(Stories);
