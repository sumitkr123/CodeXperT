import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import {persistor, store} from '../redux/store';

import {enableScreens} from 'react-native-screens';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';
import {Routes} from '../routes';

enableScreens();

export function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
