import React from 'react';

import {HomeScreen} from '../../screens/core/home/HomeScreen';
import {SettingScreen} from '../../screens/core/setting/SettingScreen';
import {CreateScreen} from '../../screens/core/create/CreateScreen';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View} from 'react-native';
import {RootBottomNavParamList} from '../../models/navigationTypes';
import {COLORS} from '../../utils/colors';
import {useAppSelector} from '../../redux/hooks';
import {BottomNavStyle} from '../../../assets/styles/screens/bottomNavStyle';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator<RootBottomNavParamList>();

export const BottomNavBar = () => {
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
