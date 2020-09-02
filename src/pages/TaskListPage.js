import React from 'react';
import { Provider } from 'react-redux';
import store from '../lib/redux';

import PureInboxScreen from '../components/InboxScreen';

import './index.css';

function TaskListPage() {
  return (
    <Provider store={store}>
      <PureInboxScreen />
    </Provider>
  );
}
export default TaskListPage;