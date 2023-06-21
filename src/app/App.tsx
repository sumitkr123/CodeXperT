import React from 'react';

import {Provider} from 'react-redux';
import {persistor, store} from '../redux/store';

import {PersistGate} from 'redux-persist/integration/react';
import {Routes} from '../routes';
import {Loader} from '../components/ui';

export function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
