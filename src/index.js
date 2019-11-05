import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';
// import { getReadableStories } from './selectors/story'
// import { STORY_ARCHIVE } from './constants/actionTypes'
// import { doArchiveStory } from './actions/archive'
import './index.css';

// function render(){
//   ReactDOM.render(
//     <App stories={getReadableStories(store.getState())} onArchive={ id => store.dispatch(doArchiveStory(id)) } />,
//     document.getElementById('root'));
// }
//
// store.subscribe(render)
// render()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
