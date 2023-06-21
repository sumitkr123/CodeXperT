import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  RootAuthStackParamList,
  RootBottomNavParamList,
  RootStackParamList,
} from '../models/navigationTypes';

import {Login} from '../screens/authentication/login/LoginScreen';
import {Register} from '../screens/authentication/register/RegisterScreen';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useAppSelector} from '../redux/hooks';
import {HomeScreen} from '../screens/core/home/HomeScreen';

import {CreateScreen} from '../screens/core/create/CreateScreen';
import {SettingScreen} from '../screens/core/setting/SettingScreen';
import {WelcomeScreen} from '../screens/others/welcome/WelcomeScreen';
import {ProfileScreen} from '../screens/core/profile/ProfileScreen';
import {CustomStatusBar} from '../components/ui/StatusBar/StatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CustomBottomTabBar} from '../components/ui/BottomBar/CustomBottomBar';

const AuthNativeStack = createNativeStackNavigator<RootAuthStackParamList>();

const Auth =
  ({}: NativeStackScreenProps<RootStackParamList>): React.JSX.Element => {
    return (
      <AuthNativeStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          orientation: 'portrait',
          animation: 'none',
          headerShown: false,
        }}>
        <AuthNativeStack.Screen name="Login" component={Login} />
        <AuthNativeStack.Screen name="Register" component={Register} />
      </AuthNativeStack.Navigator>
    );
  };

const BottomTabs = createBottomTabNavigator<RootBottomNavParamList>();

const BottomNavBar =
  ({}: BottomTabScreenProps<RootStackParamList>): React.JSX.Element => {
    return (
      <BottomTabs.Navigator
        initialRouteName="Home"
        detachInactiveScreens={true}
        tabBar={props => <CustomBottomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <BottomTabs.Screen name="Home" component={HomeScreen} />
        <BottomTabs.Screen name="Create" component={CreateScreen} />
        <BottomTabs.Screen name="Settings" component={SettingScreen} />
      </BottomTabs.Navigator>
    );
  };

const NativeStack = createNativeStackNavigator<RootStackParamList>();

export const Routes = (): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={theme.statusBarColor} />
      <SafeAreaProvider>
        <NavigationContainer>
          <NativeStack.Navigator
            screenOptions={{
              animation: 'none',
              orientation: 'portrait',
              headerShown: false,
            }}>
            <NativeStack.Screen name="Welcome" component={WelcomeScreen} />
            <NativeStack.Screen name="Auth" component={Auth} />
            <NativeStack.Screen name="BottomNavBar" component={BottomNavBar} />
            <NativeStack.Screen name="Profile" component={ProfileScreen} />
          </NativeStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </SafeAreaProvider>
  );
};
