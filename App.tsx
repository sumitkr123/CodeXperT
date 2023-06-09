import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from './src/components/welcomePage/WelcomeScreen';
import {BottomNavBar} from './src/components/bottomNav/BottomNavBar';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {RootStackParamList} from './src/models/navigationTypes';
import {Auth} from './src/components/auth/Auth';

import {enableScreens} from 'react-native-screens';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';
import {ProfileScreen} from './src/screens/core/profile/ProfileScreen';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: 'none',
              orientation: 'portrait',
              headerShown: false,
            }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
