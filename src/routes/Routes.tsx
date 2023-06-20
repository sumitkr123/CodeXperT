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
import {BottomNavStyle} from '../../assets/styles/screens/bottomNavStyle';
import {HomeScreen} from '../screens/core/home/HomeScreen';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import {CreateScreen} from '../screens/core/create/CreateScreen';
import {COLORS} from '../utils/colors';
import {SettingScreen} from '../screens/core/setting/SettingScreen';
import {WelcomeScreen} from '../screens/others/welcome/WelcomeScreen';
import {ProfileScreen} from '../screens/core/profile/ProfileScreen';

const AuthNativeStack = createNativeStackNavigator<RootAuthStackParamList>();

const Auth =
  ({}: NativeStackScreenProps<RootStackParamList>): React.JSX.Element => {
    return (
      <AuthNativeStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          orientation: 'portrait',
          animation: 'none',
        }}>
        <AuthNativeStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <AuthNativeStack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </AuthNativeStack.Navigator>
    );
  };

const BottomTabs = createBottomTabNavigator<RootBottomNavParamList>();

const BottomNavBar =
  ({}: BottomTabScreenProps<RootStackParamList>): React.JSX.Element => {
    const newTheme = useAppSelector(state => state.theme);

    return (
      <BottomTabs.Navigator
        initialRouteName="Home"
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: newTheme.primary,
          tabBarStyle: BottomNavStyle(newTheme).barStyle,
        }}>
        <BottomTabs.Screen
          name="Home"
          component={HomeScreen}
          options={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              return focused === true ? (
                <Icons name="home" color={color} size={25} />
              ) : (
                <Icons name="home-outline" color={color} size={25} />
              );
            },
          })}
        />
        <BottomTabs.Screen
          name="Create"
          component={CreateScreen}
          options={({route}) => ({
            tabBarIcon: ({color, focused}) => {
              return (
                <View style={BottomNavStyle(newTheme, focused, color).addView}>
                  <Icons
                    name="plus"
                    color={focused === true ? COLORS.white : newTheme.primary}
                    size={25}
                  />
                </View>
              );
            },
          })}
        />
        <BottomTabs.Screen
          name="Settings"
          component={SettingScreen}
          options={({route}) => ({
            tabBarIcon: ({color, focused}) => {
              return focused === true ? (
                <Icons name="account" color={color} size={25} />
              ) : (
                <Icons name="account-outline" color={color} size={25} />
              );
            },
          })}
        />
      </BottomTabs.Navigator>
    );
  };

const NativeStack = createNativeStackNavigator<RootStackParamList>();

export const Routes = (): React.JSX.Element => {
  return (
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
  );
};
