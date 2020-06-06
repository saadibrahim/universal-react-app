import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@universal/common/store';

import Home from '@universal/common/containers/Home';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
