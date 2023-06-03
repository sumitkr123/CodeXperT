import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from './src/components/welcomePage/WelcomeScreen';
import {BottomNavBar} from './src/components/bottomNav/BottomNavBar';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {RootStackParamList} from './src/models/navigationTypes';
import {Auth} from './src/components/auth/Auth';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
